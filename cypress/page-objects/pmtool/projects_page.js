import { HeaderSection } from "./header_sections";
import { NewProjectWindowPage } from "./new_project_window_page";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.addNewProjectButton = 'button[test_id="add_project_button"]';
    this.page_title = "h3.page-title";
    cy.get(this.page_title).should("have.text", " Projects");
  }

  clickNewProjectButton() {
    cy.get(this.addNewProjectButton).click();
    return new NewProjectWindowPage();
  }
}
