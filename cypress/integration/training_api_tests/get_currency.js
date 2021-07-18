describe('Get contact', () => {
    before(()=>{
        cy.authenticate()
    });
    it("returns contact successfully", () => {
        cy.getLocalStorage('auth_token').then((auth_token) => {
            return cy.request({
                method: 'GET',
                url: Cypress.env('ccBaseUrl')+'/v2/balances/GBP',
                headers: {
                    'X-Auth-Token': auth_token
                },
                body: {}
            }).then((response)=> {
                expect(response.status).to.eq(200),
                expect(response.body).have.property('amount')
            });
        });
    });
})
