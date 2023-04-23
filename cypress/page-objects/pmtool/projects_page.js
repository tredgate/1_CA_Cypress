import { HeaderSection } from "./header_sections";
import { NewProjectWindowPage } from "./new_project_window_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.addNewProjectButton = 'button[test_id="Add Project"]';
    this.page_title = "h3.page-title";
    this.search_file = 'input[test_id="search_input"]';
    this.projectName = ".item_heading_link";
    this.priority = "td[class='fieldtype_dropdown field-156-td'] div";
    this.status = "td[class='fieldtype_dropdown field-157-td'] div";
    this.startDate = ".fieldtype_input_date.field-159-td";
    this.dateEdit = ".fieldtype_date_added.field-154-td.nowrap";
    this.createdBy = "span[data-toggle='popover']";
    cy.get(this.page_title).should("have.text", " Projects");
  }

  clickNewProjectButton() {
    cy.get(this.addNewProjectButton).click();
    return new NewProjectWindowPage();
  }
}
