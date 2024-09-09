import Stopwatch from '../../src/Stopwatch.jsx';
import '../../src/scss/style.css';

describe('<Stopwatch />', () => {
    //Styles were tested in E2E
    beforeEach(() => {
        cy.mount(<Stopwatch />) //<ResultList /> is displayed too (since <Stopwatch />'s child)
    })
    it('stopwatch runs', () => {
        cy.get('[data-test="elapsed"]').should('have.text', '00:00:00:00')
        cy.get('[data-test="start"]').click()
        cy.get('[data-test="elapsed"]').should('not.have.text', '00:00:00:00')
        cy.get('[data-test="stop"]').dblclick().click()
        cy.get('[data-test="reset"]').click()
        cy.get('[data-test="elapsed"]').should('have.text', '00:00:00:00')
    })
})