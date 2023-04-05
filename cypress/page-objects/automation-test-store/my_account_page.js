import { EditAccountDetailsPage } from "./edit_account_details_page";

export class MyAccountPage {
  constructor() {
    this.editAccountDetailsAnchor =
      'div.myaccountbox a[href="https://automationteststore.com/index.php?rt=account/edit"]';
    this.logoffAnchor =
      'div.myaccountbox a[href="https://automationteststore.com/index.php?rt=account/logout"]';
  }

  clickEditAccountDetails() {
    cy.get(this.editAccountDetailsAnchor).click();
    return new EditAccountDetailsPage();
  }

  clickLogoff() {
    cy.get(this.logoffAnchor).click();
  }
}
