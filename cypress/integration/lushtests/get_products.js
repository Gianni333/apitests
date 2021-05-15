describe("Get products", () => {
    before(() => {
        cy.login()
      })


    it("Get list of products successfully", () => {
      cy.request('GET',
      '/products').then(
        (response) => {
        expect(response.status).to.eq(200),
        expect(response.body).to.have.property('status', 'ok'),
        expect(response.body).to.have.property('data')
      })
    });

    it("Error getting list of products", () => {
      cy.request({
        method: 'POST',
        url: '/product',
        failOnStatusCode: false}).then(
          (response) => {
          expect(response.status).to.eq(404)
        })
      });
});