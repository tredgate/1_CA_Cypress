import usersData from '../../fixtures/login_roles_users.json'
import { LoginPage } from '../../page-objects/pmtool/login_page';

describe('Login With All Roles Tests', () => {
    
    usersData.forEach(user => {
        it(`Login with ${user.role} role`, () => {
            new LoginPage()
                .openPmtool()
                .typeUsername(user.username)
                .typePassword(user.password)
                .clickLogin()
                .userNameHasFullName(`${user.first_name} ${user.last_name}`)
        })
    })
}); 