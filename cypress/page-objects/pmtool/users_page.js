import { HeaderSection } from "./header_sections";
import { NewUserWindowPage } from "./new_user_window_page";
import { createCustomElement } from "../../support/helpers/custom_element";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.page_title = createCustomElement("h3.page-title");
    this.addUserButton = createCustomElement("button[test_id='Add User']");
    this.withSelectedButton = createCustomElement("with_selected_dropdown");
    this.importButton = createCustomElement("a[test_id='import_button']");
    this.searchInput = createCustomElement("input[test_id='search_input']");
    this.searchButton = createCustomElement("button[test_id='search_button']");
    this.searchDropdownButton = createCustomElement("button[test_id='search_dropdown']");
    this.pageTitle = createCustomElement("h3.page-title");
    this.addFilterButton = createCustomElement("button[test_id='Add_filter']");
    this.filterDropdownButton = createCustomElement("button[test-id='filters_dropdown_menu']");
    this.filterConfigurationAnchor = createCustomElement("a[test_id='view_configuration']");
    this.usersTable = createCustomElement(".table.table-striped");

  }

  clickAddUserButton() {
    this.addUserButton.get().click();
    return new NewUserWindowPage();
  }
}
