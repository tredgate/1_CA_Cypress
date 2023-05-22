import { HeaderSection } from "./header_section";
import { NewTaskWindowPage } from "./new_task_window_page";

export class ProjectsTasksPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
    this.addNewTaskButton = 'button[test_id="Add Task"]';
  }

  clickAddTask() {
    cy.get(this.addNewTaskButton).click();
    return new NewTaskWindowPage();
  }
}
