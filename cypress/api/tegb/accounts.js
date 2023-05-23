  export class Accounts {
    createAccount(accessToken, userId, dailyLimit, monthlyLimit, deposit) {
      return cy.request({
        method: "POST",
        url: "http://localhost:3000/accounts",
        headers: {
          authorization: "Bearer " + accessToken,
        },
        body: {
          userId: userId,
          accountType: "checking",
          transactionLimits: {
            dailyLimit: dailyLimit,
            monthlyLimit: monthlyLimit,
          },
          deposit: deposit,
          createdAt: "2023-05-07T12:00:00.000Z",
        },
      });
    }
  }

  export default Accounts;
