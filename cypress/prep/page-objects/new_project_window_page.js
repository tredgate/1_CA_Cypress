import { HomePage } from "./home_page";
import { ProjectsPage } from "./projects_page";
import { ProjectsTasksPage } from "./projects_tasks_page";

export class NewProjectWindowPage {
  constructor() {
    this.projectNameInput = 'div[data-testid="Name"] input';
    this.saveButton = 'button[type="submit"]';
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.startDateInput = 'div[data-testid="Start Date"] input';
    this.attachFileInput = "input[type='file'][data-msg-accept=' ']";
  }

  typeProjectName(projectName) {
    cy.get(this.projectNameInput).type(projectName);
    return this;
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  //! need to save file into alias in test
  attachFile() {
    cy.get(this.attachFileInput).selectFile("@projectAttachFile", {
      force: true,
    });
    return this;
  }

  fillStartDate(startDate) {
    cy.get(this.startDateInput).type(startDate);
    return this;
  }

  clickSaveButton() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }
}
