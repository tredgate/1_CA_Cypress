export class RegistrationPage {
  constructor() {
    this.firstNameInput = "#AccountFrm_firstname";
    this.lastNameInput = "#AccountFrm_lastname";
    this.emailInput = "#AccountFrm_email";
    this.telephoneInput = "#AccountFrm_telephone";
    this.faxInput = "#AccountFrm_fax";
    this.companyInput = "#AccountFrm_company";
    this.address1Input = "#AccountFrm_address_1";
    this.address2Input = "#AccountFrm_address_2";
    this.cityInput = "#AccountFrm_city";
    this.postcodeInput = "#AccountFrm_postcode";
    this.loginNameInput = "#AccountFrm_loginname";
    this.passwordInput = "#AccountFrm_password";
    this.confirmPasswordInput = "#AccountFrm_confirm";
    this.createAccountButton = "[title='Continue']";
  }

  enterFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }

  enterEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  enterTelephone(telephone) {
    cy.get(this.telephoneInput).type(telephone);
  }

  enterFax(fax) {
    cy.get(this.faxInput).type(fax);
  }

  enterCompany(company) {
    cy.get(this.companyInput).type(company);
  }

  enterAddress1(address1) {
    cy.get(this.address1Input).type(address1);
  }

  enterAddress2(address2) {
    cy.get(this.address2Input).type(address2);
  }

  enterCity(city) {
    cy.get(this.cityInput).type(city);
  }

  enterPostcode(postcode) {
    cy.get(this.postcodeInput).type(postcode);
  }

  enterLoginName(loginName) {
    cy.get(this.loginNameInput).type(loginName);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get(this.confirmPasswordInput).type(confirmPassword);
  }

  clickCreateAccountButton() {
    cy.get(this.createAccountButton).click();
  }
}
