export class BasePage {
  constructor(path) {
    this.baseUrl = "http://tredgate.com/pmtool/index.php?";
    this.path = path;
  }

  visit() {
    cy.visit(this.baseUrl + this.path);
    return this;
  }
}
