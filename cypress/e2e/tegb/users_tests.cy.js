import { faker } from '@faker-js/faker';
import User from '../../api/tegb/user';

describe('TEG#B user tests', () => {
    
    let username;
    let email;
    const password = "Tredgate2023";

    beforeEach(() => {
        username = faker.internet.userName();
        email = faker.internet.exampleEmail();
        cy.visit('http://localhost:3001');
    });

    it('Register and login via API', () => {
        let user = new User();
        user.register(username, password, email);
        user.login(username, password).as('login_response');
        cy.get('@login_response').then((response) => {
            cy.setCookie('access_token', response.body.access_token);
        });
        cy.visit('http://localhost:3001/app');
    });
});