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

  it('arithmetical operators should update the display with the result of their operation', () => {

    cy.get('#number6').click();
    cy.get('#operator-add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12');
  })

  it('should be able to handle chained operations', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  })
})