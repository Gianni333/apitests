var faker = require('faker');
var randomPassword = faker.internet.password();

describe('authenticate', () => {
    it("authenticates successfully", () => {
        cy.request('POST',
        Cypress.env("ccBaseUrl") + '/v2/authenticate/api',
          { login_id: Cypress.env("login_id"),
          api_key: Cypress.env("api_key") }).then(
          (response) => {
          expect(response.status).to.eq(200)
        })
    });
    it("does not authenticate successfully", () => {
        cy.request({
            method: 'POST',
            url: Cypress.env("ccBaseUrl") + '/v2/authenticate/api',
            failOnStatusCode: false,
            body: {
              login_id: Cypress.env("login_id"),
              api_key: randomPassword,
            },
            headers: {}
            }).then(
              (response) => {
              expect(response.status).to.eq(400)
            })
          });
    
});