describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons should update the display of the total', () => {
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '55')
  })
})