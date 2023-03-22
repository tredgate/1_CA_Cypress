export class GeneralPOPage {
  constructor() {
    this.someElementSelector = "selector";
  }

  someFunction() {
    cy.get(this.someElementSelector);
  }
}
