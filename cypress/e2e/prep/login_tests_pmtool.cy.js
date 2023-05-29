import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Login Tests', () => {

    it('Login with valid credentials', () => {
        new LoginPage()
            .openPmtool()
            .typeUsername('admin')
            .typePassword('admin')
            .clickLogin()
            .clickProfile()
            .clickLogout()


    });
});