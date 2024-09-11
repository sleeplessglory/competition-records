describe('styling tests', () => {
    beforeEach(() => {
        cy.visit('') //if the port changes, change it in "cypress.config.js"
    })
    it('page loads', () => {
        cy.contains(/Set activities for competitions/i).should('be.visible')
    })
    it('correct colours', () => {
        /*Cypress uses RGB to compare. My colours are set in HSL format. 
        Can be converted or checked in the code. Let's use RGB as input for tests*/
        cy.get('body').should('have.css', 'background-color', 'rgb(24, 4, 98)')
        cy.get('[data-test="dig-clock"]').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-test="header"]').should('have.css', 'color', 'rgb(255, 255, 255)')
        
        cy.get('[data-test="stop-1"]').should('have.css', 'background-color', 'rgb(178, 1, 1)')
        cy.get('[data-test="stop-1"]').within(() => {
            commonColours()
        })
        cy.get('[data-test="stop-2"]').should('have.css', 'background-color', 'rgb(204, 197, 0)')
        cy.get('[data-test="stop-2"]').within(() => {
            commonColours()
        })
        cy.get('[data-test="stop-3"]').should('have.css', 'background-color', 'rgb(12, 122, 0)')
        cy.get('[data-test="stop-3"]').within(() => {
            commonColours()
        })
        function commonColours() { //testing common elements of all the stopwatches
            cy.get('[data-test="stopwatch-container"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
            cy.get('[data-test="elapsed"]').should('have.css', 'color', 'rgb(24, 4, 98)')
            cy.get('[data-test="start"]').should('have.css', 'background-color', 'rgb(13, 119, 13)')
            cy.get('[data-test="stop"]').should('have.css', 'background-color', 'rgb(119, 13, 13)')
            cy.get('[data-test="reset"]').should('have.css', 'background-color', 'rgb(13, 31, 119)')

            cy.get('[data-test="activity"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
            cy.get('[data-test="first"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
            cy.get('[data-test="second"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
            cy.get('[data-test="third"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')

            cy.get('[data-test="start"').click()
            cy.get('[data-test="stop"').dblclick().click()
            cy.get('[data-test="first"]').should('have.css', 'color', 'rgb(204, 173, 0)')
            cy.get('[data-test="second"]').should('have.css', 'color', 'rgb(128, 128, 128)')
            cy.get('[data-test="third"]').should('have.css', 'color', 'rgb(165, 42, 42)')
        }
    })
    it('correct fonts', () => {
        //Pay attention to testing font-families with '"Circular Std 2"', '..., "Times New Roman"', etc.
        cy.get('[data-test="dig-clock"]').should('have.css', 'font-family', 'monospace, Arial, "Times New Roman"')
        cy.get('[data-test="header"]').should('have.css', 'font-family', '"Circular Std 2"')
        cy.get('[data-test="stop-1"]').within(() => {
            commonFonts()
        })
        cy.get('[data-test="stop-2"]').within(() => {
            commonFonts()
        })
        cy.get('[data-test="stop-3"]').within(() => {
            commonFonts()
        })
        function commonFonts() { //testing common elements of all the stopwatches
            cy.get('[data-test="elapsed"]').should('have.css', 'font-family', 'monospace, "Circular Std 2", Arial')
            cy.get('[data-test="start"]').should('have.css', 'font-family', '"Circular Std 2"')
            cy.get('[data-test="stop"]').should('have.css', 'font-family', '"Circular Std 2"')
            cy.get('[data-test="reset"]').should('have.css', 'font-family', '"Circular Std 2"')
        }
    })
    it('dynamic classes work correctly', () => {
        //let's apply dynamic classes to the buttons (when stopped 3 times) of all the stopwatches
        cy.get('[data-test="stop-1"]').within(() => {
            dynamic();
        })
        cy.get('[data-test="stop-2"]').within(() => {
            dynamic();
        })
        cy.get('[data-test="stop-3"]').within(() => {
            dynamic();
        })
        function dynamic() {
            cy.get('[data-test="start"]').should('not.have.css', 'visibility', 'hidden')
            cy.get('[data-test="stop"]').should('not.have.css', 'visibility', 'hidden')

            cy.get('[data-test="start"').click()
            cy.get('[data-test="stop"').dblclick().click()
            cy.get('[data-test="start"]').should('have.css', 'visibility', 'hidden')
            cy.get('[data-test="stop"]').should('have.css', 'visibility', 'hidden')

            cy.get('[data-test="reset"').click()
            cy.get('[data-test="start"]').should('not.have.css', 'visibility', 'hidden')
            cy.get('[data-test="stop"]').should('not.have.css', 'visibility', 'hidden')
        }
    })
    it('animations work correctly', () => {
        cy.get('[data-test="stop-1"]').within(() => {
            animations();
        })
        cy.get('[data-test="stop-2"]').within(() => {
            animations();
        })
        cy.get('[data-test="stop-3"]').within(() => {
            animations();
        })
        function animations() {
            //complex animations and visuals can be tested with cypress-plugin-snapshots
            cy.get('[data-test="start"').click()
            cy.get('[data-test="stop"').should('have.css', 'animation-duration', '7s')
                                           .and('have.css', 'animation-name', 'stop-reset-glow')
                                           .and('have.css', 'animation-iteration-count', 'infinite')
                                           .and('have.css', 'animation-timing-function', 'ease')
            //let's at least test the property being applied (catching box-shadow glow values is challenging)
                                           .and('have.css', 'box-shadow')
            cy.get('[data-test="stop"').dblclick().click()
            cy.get('[data-test="reset"').should('have.css', 'animation-duration', '7s')
                                           .and('have.css', 'animation-name', 'stop-reset-glow')
                                           .and('have.css', 'animation-iteration-count', 'infinite')
                                           .and('have.css', 'animation-timing-function', 'ease')
                                           .and('have.css', 'box-shadow')
        }
    })
    it('mobile layout works correctly', () => {
        //let's test the mobile layout (width is less than 800px)
        cy.viewport(799, 1050) //width = 799px, height = 1050px
        cy.get('[data-test="all-stopwatches"]').should('have.css', 'display', 'flex')
                                                  .and('have.css', 'flex-direction', 'column')
                                                  .and('have.css', 'align-items', 'center')
                                                  .and('have.css', 'margin-top', '20px')
        cy.get('[data-test="stop-2"]').should('have.css', 'margin-top', '20px')
        cy.get('[data-test="stop-3"]').should('have.css', 'margin-top', '20px')
    })
})