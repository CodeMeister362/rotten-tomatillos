describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('User should be able to access the search form on homepage', () => {
    cy.get('.search-input')
      .should('have.attr', 'placeholder', 'Search movies by title 🔎')
  })

  it('User should be able to add input to search form', () => {
    cy.get('input[name="title"]')
      .type('Black Adam')
      .should('have.attr', 'value', 'Black Adam')
  })

  it('User should be able to filter movie poster grid based on search input', () => {
    cy.get('.search-form').type('Black Adam').submit()
      .get('.poster-img')
      .should('have.attr', 'alt', 'Black Adam')
  })

  it('User should be able notified if no search results are found', () => {
    cy.get('.search-form').type('test').submit()
      cy.on('window:alert', (text) => {
      expect(text).to.equal('There are no results for that search. Try again?');
    });
  })
});