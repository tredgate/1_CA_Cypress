import { HeaderSection } from "./header_sections";
import { NewProjectWindowPage } from "./new_project_window_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.addNewProjectButton = 'button[test_id="Add Project"]';
    this.page_title = "h3.page-title";
    this.search_file = 'input[test_id="search_input"]';
    this.searchButton = 'button[test_id="search_button"]';
    this.searchNotesDiv = ".search-notes";
    this.projectNameAnchor = ".item_heading_link";
    this.priorityDiv = "td[class='fieldtype_dropdown field-156-td'] div";
    this.statusDiv = "td[class='fieldtype_dropdown field-157-td'] div";
    this.startDateTd = ".fieldtype_input_date.field-159-td";
    this.dateAddedTd = ".fieldtype_date_added.field-154-td.nowrap";
    this.createdBySpan = "span[data-toggle='popover']";
    this.loaderDiv = ".data_listing_processing";
    cy.get(this.page_title).should("have.text", " Projects");
  }

  clickNewProjectButton() {
    cy.get(this.addNewProjectButton).click();
    return new NewProjectWindowPage();
  }

  searchProject(projectName) {
    cy.get(this.search_file).clear().type(projectName);
    cy.get(this.searchButton).click();
    cy.get(this.loaderDiv).should("not.exist");
    cy.get(this.searchNotesDiv).should("be.visible");
    return this;
  }

  projectNameHasText(projectName) {
    cy.get(this.projectNameAnchor).should("have.text", projectName);
    return this;
  }

  priorityHasText(priority) {
    cy.get(this.priorityDiv).should("have.text", priority);
    return this;
  }

  statusHasText(status) {
    cy.get(this.statusDiv).should("have.text", status);
    return this;
  }

  startDateHasText(startDate) {
    cy.get(this.startDateTd).should("have.text", startDate);
    return this;
  }

  dateAddedContainsText(dateAdded) {
    cy.get(this.dateAddedTd).should("contains.text", dateAdded);
    return this;
  }

  createdByHasText(createdBy) {
    cy.get(this.createdBySpan).should("have.text", createdBy);
    return this;
  }
}
