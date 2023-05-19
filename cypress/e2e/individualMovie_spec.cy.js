describe('Single Movie Functionality', () => {
  it('User should be able to click on a poster and see the associated movie details', () => {
    cy.visit('http://localhost:3000')
      .get('[alt="Black Adam"]').click()
      cy.url().should('eq', 'http://localhost:3000/436270')
      .get('.background')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
      .get('.poster')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.title')
      .contains('Black Adam')
      .get('.release-date')
      .contains('2022')
      .get('.tagline')
      .contains('The world needed a hero. It got Black Adam.')
      .get('.budget')
      .contains('$200,000,000')
      .get('.revenue')
      .contains('$384,571,691')
      .get('.iframe')
      .should('have.attr', 'title', 'YouTube video player')
  })

  it('User should be be notified in case of client-side errors', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 404 }
      ).as('getServerFailure')
    cy.visit('http://localhost:3000')
    cy.get('.error')
      .contains('404 Error')
  })

  it('User should be be notified in case of server-side errors', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 500 }
      ).as('getServerFailure')
    cy.visit('http://localhost:3000')
    cy.get('.error')
      .contains('500 Error')
  })
});