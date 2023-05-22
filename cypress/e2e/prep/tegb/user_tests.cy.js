import User from "../learning/api/user";
import { faker } from "@faker-js/faker";

describe("TEG#B user tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "Tredgate2023";
    email = faker.internet.email();
    cy.visit("http://localhost:3001/");
  });

  it("Register and login via API", () => {
    let user = new User();
    user.register(username, password, email);
    user.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      cy.setCookie("access_token", response.body.access_token);
    });
    cy.visit("http://localhost:3001/app");


  });
});
'