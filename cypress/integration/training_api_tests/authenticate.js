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
});