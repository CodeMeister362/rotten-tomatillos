describe('Dashboard Functionality', () => {
  it('User should see the Rotten Tomatillos logo upon page load', () => {
    cy.visit('http://localhost:3000')
      .get('.logo')
      .should('have.attr', 'alt', 'rotten-tomatillos-logo')
  });

  it('User should see a grid of movie posters upon page load', () => {
    cy.visit('http://localhost:3000')
      .get('.poster-img')
      .should('have.attr', 'alt', 'Black Adam')
  });
})