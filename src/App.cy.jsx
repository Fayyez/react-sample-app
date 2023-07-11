///<reference types ="cypress" />
import React from 'react'
import App from './App'

describe('<App />', () => {

  var textToAdd=['item 1', 'item 2', 'item 3']

  beforeEach( () => {
    cy.mount(<App />)//get the react component mounted
  })

  it('renders with label', () => {
    cy.get('[data-cy-root=""]')
    cy.get('label').should('have.text','List')
  })

  it('input works',() => {
    cy.get('#new-item')
    .click()
    .type(textToAdd[0])//add text to input field
    cy.get('[data-cy="btn"]')
    .click()
    cy.get('[data-cy="list"]')
    .should('contain.text',textToAdd[0])//assert text was added to list
  })

  it('checkbox works # 1', () => {
    cy.get('#new-item')
    .type(textToAdd[1])
    cy.get('[data-cy="btn"]')
    .click()
    cy.get('#new-item')
    .type(textToAdd[2])
    cy.get('[data-cy="btn"]')
    .click()
    cy.get(':nth-child(1) > label > input')
    .should('exist')//assert checkbox is displayed
    .and('not.be.checked')// & is unchecked by default
  })

  it('checkbox works # 2', () => {
    cy.get('#new-item')
    .type(textToAdd[1])//add an item to list
    cy.get('[data-cy="btn"]')
    .click()
    cy.get(':nth-child(1) > label > input')
    .check()//tick the checkbox
    cy.get(':nth-child(1) > label > input')
    .should('be.checked')//assert tickbox worked
  })

  it('delete button works',() => {
    cy.get('#new-item')
    .type(textToAdd[1])
    cy.get('[data-cy="btn"]')
    .click()//add the item
    cy.get('[data-cy="list"]')
    .should('exist')
    .and('have.length', 1)//assert list has one item
    cy.get('[data-cy="del-btn"]')
    .click()//delete the item
    cy.get('[data-cy="list"]')
    .within(()=> {
      cy.get('li')
      .should('not.exist')
    })

  })
})