import { GeneralPOPage } from "../../../page-objects/learning/general_po_page";

describe("First Page Objects Tests", () => {
  it("First Page Objects Tests", () => {
    let firstPageObject = new GeneralPOPage();
    firstPageObject.someFunction();
  });
});
