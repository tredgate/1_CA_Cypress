import { HeaderSection } from "./header_sections";
import { NewProjectWindowPage } from "./new_project_window_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addNewProjectButton = 'button[test_id="Add Project"]';
    this.page_title = "h3.page-title";
    this.searchInput = 'input[test_id="search_input"]';
    this.searchButton = 'button[test_id="search_button"]';
    this.searchNotesDiv = ".search-notes";
    this.projectNameAnchor = ".item_heading_link";
    this.priorityDiv = "td[class='fieldtype_dropdown field-156-td'] div";
    this.statusDiv = "td[class='fieldtype_dropdown field-157-td'] div";
    this.startDateTd = ".fieldtype_input_date.field-159-td";
    this.dateAddedTd = ".fieldtype_date_added.field-154-td.nowrap";
    this.createdBySpan = "span[data-toggle='popover']";
    this.loaderDiv = ".data_listing_processing";
    this.filtersBoxDiv = "div[test_id='Filters']";
    this.filtersDropdownButton = "button[test-id='filters_dropdown_menu'] i";
    this.filtersAddButton = "button[test_id='Add_filter']";
    this.filtersTitle = ".caption";
    this.filtersCollapseButton = "a[test_id='expand_collapse_filters']";
    this.filtersConfigurationButton = "a[test_id='view_configuration'] i";
    this.removeAllFiltersButton = "a[test_id='remove_all_filters']";
    this.filterProjectButton = "#filter_projects";
    this.filtersActualConfigurationDiv = ".filters-preview-box.is-active-1";
    this.importButton = "a[test_id='import_button']";
    this.withSelectedDropdown = "button[test_id='with_selected_dropdown']";
    this.loaderDiv = '.data_listing_processing';
  }

  waitForLoaderVanish() {
    cy.get('.data_listing_processing').should("not.exist");
    return this;
  }

  searchInputIsVisible() {
    cy.get(this.searchInput).should("be.visible");
    return this;
  }

  searchButtonIsVisible() {
    cy.get(this.searchButton).should("be.visible");
    return this;
  }

  addProjectButtonIsVisible() {
    cy.get(this.addNewProjectButton).should("be.visible");
    return this;
  }

  withSelectedDropdownIsVisible() {
    cy.get(this.withSelectedDropdown).should("be.visible");
    return this;
  }

  importButtonIsVisible() {
    cy.get(this.importButton).should("be.visible");
    return this;
  }

  filtersDropdownVisible() {
    cy.get(this.filtersDropdownButton).should("be.visible");
    return this;
  }
  filtersAddButtonVisible() {
    cy.get(this.filtersAddButton).should("be.visible");
    return this;
  }
  filtersTitleVisible() {
    cy.get(this.filtersTitle).should("be.visible");
    return this;
  }
  filtersTitleHasText(text) {
    cy.get(this.filtersTitle).should("contain.text", text);
    return this;
  }
  filtersCollapseButtonVisible() {
    cy.get(this.filtersCollapseButton).should("be.visible");
    return this;
  }
  filtersConfigurationButtonVisible() {
    cy.get(this.filtersConfigurationButton).should("be.visible");
    return this;
  }
  filtersRemoveAllButtonVisible() {
    cy.get(this.removeAllFiltersButton).should("be.visible");
    return this;
  }
  filterProjectButtonVisible() {
    cy.get(this.filterProjectButton).should("be.visible");
    return this;
  }
  filtersActualConfigurationVisible() {
    cy.get(this.filtersActualConfigurationDiv).should("be.visible");
    return this;
  }

  titleIsVisible() {
    cy.get(this.page_title).should("be.visible");
    return this;
  }

  titleHasText(titleText) {
    cy.get(this.page_title).should("have.text", " " + titleText);
    return this;
  }

  filtersBoxIsVisible() {
    cy.get(this.filtersBoxDiv).should("be.visible");
    return this;
  }

  clickNewProjectButton() {
    cy.get(this.addNewProjectButton).click();
    return new NewProjectWindowPage();
  }

  searchProject(projectName) {
    cy.get(this.searchInput).clear().type(projectName);
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
