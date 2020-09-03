/// <reference types="Cypress" />

describe('Example suite', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
  })

  it('first test', () => {
    cy.get('[data-cy="signInButton"]')
    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
  })

  it('second test', () => {
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()
  })

  it('third test', () => {
    cy.contains('nb-card', 'Horizontal form')
      .find('#inputEmail3')
      .type('some email')
  })
})
