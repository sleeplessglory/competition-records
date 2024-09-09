describe('functionality tests', () => {
    //Predefined the URL to visit in "cypress.config.js" with "baseUrl"
    beforeEach(() => {
        cy.visit('') //if the port changes, change it in "cypress.config.js" too
        //or you can type it directly here without "cypress.config.js" file
    })
    it('page loads', () => {
        cy.contains(/Set activities for competitions/i).should('be.visible')
        cy.get('[data-test="header"]').should('have.text', 'Set activities for competitions')
    })
    it('activity <input> element works correctly', () => {
        /*readOnly <input> elements are tested within the component folder in "ResultList.cy.jsx" file*.
        In E2E the activity <input> ain't controlled by a setter function (unlike component tests).
        That's why it's better to test it in the E2E case over here*/
        cy.get('[data-test="stop-1"]').within(() => { //within the 1st stopwatch
            cy.get('[data-test="activity"]').should('not.have.value')
            cy.get('[data-test="activity"]').should('have.length', 1)
            cy.get('[data-test="activity"]').click().type('Swimming 200m')
            cy.get('[data-test="activity"]').should('have.value', 'Swimming 200m')
        })
        cy.get('[data-test="stop-2"]').within(() => { //within the 2nd stopwatch
            cy.get('[data-test="activity"]').should('not.have.value')
            cy.get('[data-test="activity"]').should('have.length', 1)
            cy.get('[data-test="activity"]').click().type('Running 5000m')
            cy.get('[data-test="activity"]').should('have.value', 'Running 5000m')
        })
        cy.get('[data-test="stop-3"]').within(() => { //within the 3rd stopwatch
            cy.get('[data-test="activity"]').should('not.have.value')
            cy.get('[data-test="activity"]').should('have.length', 1)
            cy.get('[data-test="activity"]').click().type('Snowboard racing')
            cy.get('[data-test="activity"]').should('have.value', 'Snowboard racing')
        })
    })
    it('stopwatches work correctly', () => {
        cy.get('[data-test="stop-1"]').within(() => { //testing the 1st stopwatch
            testStopwatch();
        })
        cy.get('[data-test="stop-2"]').within(() => { //testing the 2nd stopwatch
            testStopwatch();
        })
        cy.get('[data-test="stop-3"]').within(() => { //testing the 3rd stopwatch
            testStopwatch();
        })
        function testStopwatch() { //reusable (can be applied to all the stopwatches)
            //let's test the case when "reset" button does not clear all the <input> elements
            cy.get('[data-test="activity"]').should('have.value', '')
            cy.get('[data-test="activity"]').type('10k race')
            cy.get('[data-test="start"]').click()
            cy.get('[data-test="stop"]').click()
            cy.get('[data-test="reset"]').click()
            cy.get('[data-test="activity"]').should('have.value', '10k race')
            cy.get('[data-test="first"]').should('not.have.value', '')

            //let's test the case when "reset" button clears all the <input> elements
            cy.reload() //first let's roll back by reloading the page
            cy.get('[data-test="activity"]').should('have.value', '')
            cy.get('[data-test="activity"]').type('10k race')
            cy.get('[data-test="start"]').click()
            cy.get('[data-test="stop"]').dblclick().click()
            cy.get('[data-test="first"]').should('not.have.value', '')
            cy.get('[data-test="second"]').should('not.have.value', '')
            cy.get('[data-test="third"]').should('not.have.value', '')
            cy.get('[data-test="reset"]').click()
            cy.get('[data-test="activity"]').should('have.value', '')
            cy.get('[data-test="first"]').should('have.value', '')
            cy.get('[data-test="second"]').should('have.value', '')
            cy.get('[data-test="third"]').should('have.value', '')

            //let's test the results of competitors
            cy.get('[data-test="start"]').click()
            cy.get('[data-test="stop"]').click()
            cy.get('[data-test="first"]').should('not.have.value', '00:00:00')
            cy.get('[data-test="stop"]').click()
            cy.get('[data-test="second"]').should('not.have.value', '00:00:00')
            cy.get('[data-test="stop"]').click()
            cy.get('[data-test="third"]').should('not.have.value', '00:00:00')
        }
    })
})