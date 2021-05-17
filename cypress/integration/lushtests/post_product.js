var faker = require('faker');
var randomProductName = faker.commerce.productName();
var randomNumber = faker.random.number(50);


describe("Get products", () => {
    before(() => {
        cy.login()
      })

    it("Create a product", () => {
      cy.request('POST',
      '/products',
      { name: randomProductName,
        available: randomNumber}).then(
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