// https://docs.cypress.io/guides/getting-started/writing-your-first-test.html

describe('Calculator tests', function() {

    it('Layout is okay', function() {
        cy.visit('index.html')
        cy.title().should('eq', 'Manu\'s calculator')
        cy.get('#calculator').contains('button', '1').should('be.visible')
        cy.get('#calculator').contains('button', '2').should('be.visible')
        cy.get('#calculator').contains('button', '=').should('be.visible')
    })

    it('Screen displays the number clicked', function() {
        cy.visit('index.html')
        cy.get('#calculator').contains('button', '1').click()
        cy.get('#screen').should('have.value', '1')
    })

    it('If multiple numbers clicked, screen display them as one number in the right order', function() {
        cy.visit('index.html')
        cy.get('#calculator').contains('button', '1').click()
        cy.get('#calculator').contains('button', '2').click()
        cy.get('#calculator').contains('button', '3').click()
        cy.get('#screen').should('have.value', '123')
    })

    it('Clicking the plus button updates the screen', function() {
        cy.visit('index.html')
        cy.get('#calculator').contains('button', '1').click()
        cy.get('#calculator').contains('button', '2').click()
        cy.get('#calculator').contains('button', '+').click()
        cy.get('#calculator').contains('button', '3').click()
        cy.get('#calculator').contains('button', '4').click()
        cy.get('#screen').should('have.value', '34')
    })

})
