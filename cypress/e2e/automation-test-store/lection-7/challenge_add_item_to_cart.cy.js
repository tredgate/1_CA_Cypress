describe("CHALLENGE: Insert item to cart and remove it", () => {
  it("Insert item and remove it from cart", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart"
    ).click();
    cy.get(".block_7 > .nav > .dropdown > .dropdown-toggle").click();
    cy.get(":nth-child(7) > .btn").click();
  });
});
