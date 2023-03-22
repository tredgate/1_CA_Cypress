import { GeneralPOPage } from "../../prep/general_po_page";

describe("First Page Objects Tests", () => {
  it("General Page Object Init", () => {
    let firstPageObject = new GeneralPOPage();
    firstPageObject.someFunction();
  });
});
