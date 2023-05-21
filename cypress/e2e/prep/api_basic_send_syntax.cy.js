describe('Sending API requests with Cypress', () => {
    it('Sends a POST request to the API', () => {
    //! cy.request() se používá k odeslání požadavku na API
    //! toto je příklad POST požadavku
    cy.request({ // cy.request() se používá k odeslání požadavku na API
      method: 'POST', //method je typ HTTP požadavku, který odesíláme
      url: 'https://jsonplaceholder.typicode.com/posts',//url je URL koncového bodu API
      body: { //body je data, která odesíláme na API
        title: 'foo', //title, body a userId jsou data, která odesíláme na API
        body: 'bar',
        userId: 1
      }
    //response je odpověď, kterou dostaneme z API, používáme .then() k zajištění, že požadavek je dokončený, než provedeme jakékoli tvrzení
    }).then((response) => { 
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', 'foo')
      expect(response.body).to.have.property('body', 'bar')
      expect(response.body).to.have.property('userId', 1)
    })
  })
})