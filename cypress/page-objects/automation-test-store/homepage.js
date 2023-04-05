import { LoginOrRegisterPage } from "./login_or_register_page";

export class HomePage {
  constructor() {
    this.loginOrRegisterAnchor = "ul[id='customer_menu_top'] li a";
    this.skinsheenProductAnchor =
      "div[id='block_frame_featured_1769'] a[title='Skinsheen Bronzer Stick']";
  }

  openAutomationTestStore() {
    cy.visit("https://automationteststore.com/");
    return this;
  }

  clickLoginOrRegister() {
    cy.get(this.loginOrRegisterAnchor).click();
    return new LoginOrRegisterPage();
  }

  clickSkinsheenProduct() {
    cy.get(this.skinsheenProductAnchor).click();
  }
}
