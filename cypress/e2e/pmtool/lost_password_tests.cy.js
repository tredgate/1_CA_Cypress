import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Lost password tests', () => {
    it('Lost password e2e', () => {
        new LoginPage()
            .openPmtool()
            .clickLostPassword()
            .typeEmail("lost_password@tredgate.cz")
            .typeUsername("lost_password_user")
            .clickSubmit();
    });

    it('Open lost password page and return to homepage', () => {
        new LoginPage()
            .openPmtool()
            .clickLostPassword()
            .clickBack();
    });
});