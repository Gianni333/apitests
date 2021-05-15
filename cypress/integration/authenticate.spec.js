///<reference types='Cypress' />
const { expect } = require("chai");
const apiAuthentication = Cypress.env("baseUrl")+"/v2/authenticate/api";
const apiLogout = Cypress.env("baseUrl")+"/v2/authenticate/close_session"

describe("authenticate", () => {
  
    it("authenticates successfully", () => {
      cy.request('POST',
      apiAuthentication,
        { login_id: Cypress.env("userName"),
        api_key: Cypress.env("apiKey") }).then(
        (response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('auth_token')
        cy.setLocalStorage("authtoken", response.body.auth_token)
      })
    });

    it("logout successfully", () => {
      
      cy.request({
        method: 'POST',
        url: apiLogout, 
        header: {
          'X-Auth-Token': cy.getLocalStorage("authtoken"),
        },
        body: {}
      }).then(
        (response) => {
        expect(response.status).to.eq(200)
      })
    })

});