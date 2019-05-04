describe('home page', () => {
  it('should display the home page', () => {
    cy.visit('/products')
    cy.get('select').select('10')
    cy.get('ul')
      .eq(1)
      .children()
      .should('have.length', 10)

    cy.get('select').select('25')
    cy.get('ul')
      .eq(1)
      .children()
      .should('have.length', 25)

    cy.get('select').select('50')
    cy.get('ul')
      .eq(1)
      .children()
      .should('have.length', 50)

    cy.get('select').select('100')
    cy.get('ul')
      .eq(1)
      .children()
      .should('have.length', 97)
  })
})
