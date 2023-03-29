import { NewProjectWindowPage } from "./new_project_window_page";

export class ProjectsPage {
  constructor() {
    this.addNewProjectButton = 'button[test_id="add_project_button"]';
  }

  clickNewProjectButton() {
    cy.get(this.addNewProjectButton).click();
    return new NewProjectWindowPage();
  }
}
