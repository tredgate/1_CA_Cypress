import { NewProjectWindowPage } from "../../page-objects/pmtool/new_project_window_page";
import { MenuSection } from "./menu_section";

export class ProjectsPage extends MenuSection {
  constructor() {
    super();
    this.addNewProjectButton = 'button[test_id="add_project_button"]';
  }

  clickNewProjectButton() {
    cy.get(this.addNewProjectButton).click();
    return new NewProjectWindowPage();
  }
}
