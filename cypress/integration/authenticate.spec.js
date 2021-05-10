///<reference types='Cypress' />
const { expect } = require("chai");
const apiAuthentication = Cypress.env("baseUrl")+"/v2/authenticate/api";

describe("authenticate", () => {
    it("authenticates successfully", () => {
    cy.request('POST',
    apiAuthentication,
    { login_id: Cypress.env("userName"),
    api_key: Cypress.env("apiKey") }).then(
    (response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.property('auth_token')
    cy.writeFile('cypress/fixtures/authtoken.json', response.body)
  }
)
});
});