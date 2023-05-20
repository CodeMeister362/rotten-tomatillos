describe('Dashboard Functionality', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('User should see the Rotten Tomatillos logo upon page load', () => {
    cy.get('.logo')
      .should('have.attr', 'alt', 'rotten-tomatillos-logo')
  });

  it('User should see a grid of movie posters upon page load', () => {
    cy.get('.poster-img')
      .should('have.attr', 'alt', 'Black Adam')
  });

  it('User should be be notified in case of client-side errors', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 404 }
      ).as('getServerFailure')
      .visit('http://localhost:3000')
      .get('.error')
      .contains('404 Error')
  });

  it('User should be be notified in case of server-side errors', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 500 }
      ).as('getServerFailure')
      .visit('http://localhost:3000')
      .get('.error')
      .contains('500 Error')
  });
})