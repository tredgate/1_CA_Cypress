import { ProjectsTasksPage } from "./projects_tasks_page";

export class NewTaskWindowPage {
  constructor() {
    this.typeSelect = 'div[data-testid="Type"] select';
    this.nameInput = 'div[data-testid="Name"] input';
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.assignedToCheckboxesXpath =
      "//label[contains(text(), 'Petr Fifka')]//input";
    this.saveButton = "button[type='submit']";
  }

  selectType(type) {
    cy.get(this.typeSelect).select(type);
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

  typeTaskName(taskName) {
    cy.get(this.nameInput).type(taskName);
    return this;
  }

  assignToPetr() {
    cy.xpath(this.assignedToCheckboxesXpath).check("12");
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new ProjectsTasksPage();
  }
}
