// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands"

Cypress.Commands.add('login', () => { 
    cy.request('POST',
      '/login',
        { username: Cypress.env("userName"),
        password: Cypress.env("password") }).then(
        (response) => {
        expect(response.status).to.eq(200)
      })
 })

 Cypress.Commands.add('authenticate', () => { 
  cy.request('POST',
        Cypress.env("ccBaseUrl") + '/v2/authenticate/api',
          { login_id: Cypress.env("login_id"),
          api_key: Cypress.env("api_key") }).then(
          (response) => {
          expect(response.status).to.eq(200),
          cy.setLocalStorage("auth_token", response.body.auth_token)
        })
})