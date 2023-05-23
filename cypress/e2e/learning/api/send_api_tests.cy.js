import { faker } from "@faker-js/faker";
import User from "../../../api/tegb/user";

describe("Send API Tests", () => {
  let username;
  const password = "Tredgate2023";
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    email = faker.internet.exampleEmail();
    cy.log(username);
    cy.log(email);
    cy.log(password);
  });

  it("POST registration TEG#B", () => {
    new User().register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userId");
      expect(response.body.username).to.eq(username);
      expect(response.body.email).to.be.a("string");
    });
  });

  it('Login via API', () => {
    new User().login("fifka_petr", "Tredgate2023#").then((response) => {
        expect(response.status).to.equal(201);
    })
  });
}); 
