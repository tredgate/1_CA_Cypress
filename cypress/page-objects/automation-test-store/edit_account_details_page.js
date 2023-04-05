import { MyAccountPage } from "./my_account_page";

export class EditAccountDetailsPage {
  constructor() {
    this.phoneInput = "#AccountFrm_telephone";
    this.continueButton = "button[title='Continue']";
  }

  clearPhone() {
    cy.get(this.phoneInput).clear();
    return this;
  }

  typePhone(phone) {
    cy.get(this.phoneInput).type(phone);
    return this;
  }

  clickContinue() {
    cy.get(this.continueButton).click();
    return new MyAccountPage();
  }
}
