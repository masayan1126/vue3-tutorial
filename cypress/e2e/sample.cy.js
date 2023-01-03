/// <reference types="cypress" />

describe('sample', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('トップページに名前が表示される', () => {
    cy.get('p')
    .should('have.text', 'たなかたろう')
    })
})
