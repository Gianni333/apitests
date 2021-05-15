var faker = require('faker');
var randomPassword = faker.internet.password();

describe("authenticate", () => {
  
   /* it("authenticates successfully", () => {
      cy.request('POST',
      '/login',
        { username: Cypress.env("userName"),
        password: Cypress.env("password") }).then(
        (response) => {
        expect(response.status).to.eq(200)
      })
    });*/

    it("fails authentication", () => {
        cy.request('POST',
        '/login',
          { username: Cypress.env("userName"),
          password: randomPassword }).then(
          (response) => {
          expect(response.status).to.eq(400)
        })
      });

});