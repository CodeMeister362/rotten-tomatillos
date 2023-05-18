describe('user will be able to click into an individual movie', () => {
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
      .get('.average-rating')
      .contains('4')
  });
})