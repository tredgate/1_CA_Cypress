import { HeaderSection } from "./header_sections";
import { NewTaskWindowPage } from "./new_task_window_page";

export class ProjectsTasksPage extends HeaderSection {
  constructor() {
    super();
    this.addNewTaskButton = 'button[test_id="Add Task"]';
  }

  clickAddTask() {
    cy.get(this.addNewTaskButton).click();
    return new NewTaskWindowPage();
  }
}
