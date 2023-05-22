import { faker } from "@faker-js/faker";
import User from "./user";

describe("Send API Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "Tredgate2023";
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it("POST registration TEG#B", () => {
    new User().register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userId");
      expect(response.body.username).to.eq(username);
      expect(response.body.email).to.be.a("string");
    });
  });

  it("POST login TEG#B", () => {
    new User().login("fifka_petr", "Tredgate2023#").then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
