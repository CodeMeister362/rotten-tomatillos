describe('Logo Functionality', () => {
  it('User should be able to use the logo button to refresh the homepage', () => {
    cy.visit('http://localhost:3000')
      .get('.logo').click()
      .url().should('eq', 'http://localhost:3000/')
  })
  it('User should be able to use the logo button to return to the homepage', () => {
    cy.visit('http://localhost:3000/436270')
      .get('.logo').click()
      .url().should('eq', 'http://localhost:3000/')
  })
});