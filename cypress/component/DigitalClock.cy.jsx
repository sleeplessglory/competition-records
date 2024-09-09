import DigitalClock from '../../src/DigitalClock.jsx';

describe('<DigitalClock />', () => {
    //Styles were tested in E2E
    beforeEach(() => {
        cy.get('[data-test="dig-clock"]').should('not.exist') //before mounting
        cy.mount(<DigitalClock />) //mounts
    })
    it('fundamentals', () => {
        cy.get('[data-test="dig-clock"]').should('exist')
        cy.get('[data-test="dig-clock"]').should('be.visible')
        cy.get('[data-test="dig-clock"]').should('not.have.class')
        cy.get('[data-test="dig-clock"]').contains(/AM|PM/) //contains either "AM" or "PM"
        cy.get('[data-test="dig-clock"]').contains(':')
    })
})