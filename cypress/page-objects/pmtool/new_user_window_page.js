import { UsersPage } from "./users_page";
import { createCustomElement } from "../../support/helpers/custom_element";

export class NewUserWindowPage {
  constructor() {
    const requiredSelector = ".required-label";
    this.usernameInput = createCustomElement("div[data-testid=Username] input");
    this.usernameRequiredLabel = createCustomElement(
      `.form-group-fieldtype_user_username ${requiredSelector}`
    );
    this.accessGroupSelect = createCustomElement(
      "div[data-testid='Access Group'] select"
    );
    this.passwordInput = createCustomElement("#password");
    this.passwordRequiredLabel = createCustomElement(
      `label[for=password] ${requiredSelector}`
    );
    this.firstNameInput = createCustomElement(
      "div[data-testid='First Name'] input"
    );
    this.firstNameRequiredLabel = createCustomElement(
      `.form-group-fieldtype_user_firstname ${requiredSelector}`
    );
    this.lastNameInput = createCustomElement(
      "div[data-testid='Last Name'] input"
    );
    this.lastNameRequiredLabel = createCustomElement(
      `.form-group-fieldtype_user_lastname ${requiredSelector}`
    );
    this.emailInput = createCustomElement(
      "div[data-testid='User Email'] input"
    );
    this.emailRequiredLabel = createCustomElement(
      `.form-group-fieldtype_user_email ${requiredSelector}`
    );
    this.saveButton = createCustomElement("button[type='submit']");
    this.title = createCustomElement("h4.modal-title");
    this.collapseButton = createCustomElement(".close.modal-collapse");
    this.closeButtonHeader = createCustomElement(
      ".modal-header button[data-dismiss=modal]"
    );
    this.skinDiv = createCustomElement('div[data-testid="Skin"]');
    this.photoUploadAnchor = createCustomElement("div[data-testid=Photo] a");
    this.languageSelect = createCustomElement('div[data-testid="Language"] select');
    this.closeButtonBottom = createCustomElement(".btn.btn-default.btn-close");
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  selectAccessGroup(accessGroup) {
    this.accessGroupSelect.get().select(accessGroup);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  typeFirstName(firstName) {
    this.firstNameInput.get().type(firstName);
    return this;
  }

  typeLastName(lastName) {
    this.lastNameInput.get().type(lastName);
    return this;
  }

  typeEmail(email) {
    this.emailInput.get().type(email);
    return this;
  }

  clickSave() {
    this.saveButton.get().click();
    return new UsersPage();
  }

  selectRole(role) {
    this.accessGroupSelect.get().select(role);
    return this;
  }
}
