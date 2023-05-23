import Accounts from "../../api/tegb/accounts";
import { faker } from "@faker-js/faker";
import User from "../../api/tegb/user";


describe('', () => {
    let username;
    let email;
    const password = "Tredgate2023";

    beforeEach(() => {
        username = faker.internet.userName();
        email = faker.internet.exampleEmail();
        cy.visit('http://localhost:3001');
    });

    it('Check account balance by new user and accounts created by API', () => {
        let user = new User();
        let userId;
        let accessToken;
        user.register(username, password, email).then((response) => {
            userId = response.body.userId;
        });
        user.login(username, password).as('login_response');

        cy.get('@login_response').then((response) => {
            accessToken = response.body.access_token;
            cy.setCookie('access_token', response.body.access_token);
            new Accounts().createAccount(accessToken, userId, 100, 5000, 10000)
        });
        cy.visit('http://localhost:3001/app');
        cy.get("li[data-testid='accounts_section_link']").click();
        cy.get("p[data-testid='account_balance']").should('contain', '10000');
    });
});