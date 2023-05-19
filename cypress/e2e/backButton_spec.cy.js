describe('Back Button Functionality', () => {
  it('User should be able to use the back button to return to homepage', () => {
    cy.visit('http://localhost:3000')
      .get('[alt="Black Adam"]').click()
      .get('.back-button').click()
      cy.url().should('eq', 'http://localhost:3000/')
  })
});