class User {
  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        email: email,
        password: password,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: username,
        password: password,
      },
    });

  }
}

export default User;
