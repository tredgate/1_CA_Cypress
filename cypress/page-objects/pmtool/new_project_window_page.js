import { HomePage } from "./home_page";
import { ProjectsPage } from "./projects_page";

export class NewProjectWindowPage {
  constructor() {
    this.projectNameInput = 'div[data-testid="Name"] input';
    this.saveButton = 'button[type="submit"]';
  }

  typeProjectName(projectName) {
    cy.get(this.projectNameInput).type(projectName);
    return this;
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
    //TODO return tasks page after creating it
    return new HomePage();
  }
}
