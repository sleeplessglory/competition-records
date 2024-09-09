import ResultList from '../../src/ResultList.jsx';
import '../../src/scss/style.css'; //now CSS are applied too

describe('<ResultList />', () => {
    it('mounts', () => {
        cy.mount(<ResultList />)
    })
    it('input elements work correctly', () => { //the better testing experience is within E2E "functionality.cy.jsx"
        cy.mount(<ResultList />)
        cy.get('[data-test="activity"]').should('have.attr', 'placeholder', 'Enter activity name')

        cy.get('[data-test="activity"]').should('not.have.value')
        cy.get('[data-test="activity"]').should('have.length', 1) //meaning it exists in the DOM
        cy.get('[data-test="activity"]').should('not.have.value', 'Running 5000m')
        /*<ResultList /> has setter function to control the activity value, which is handled by
        hangleChange function within it. Without the function we can't type anything.
        Head to "functionality.cy.jsx" in E2E tests to properly test this component alongside with others*/
        
        cy.get('[data-test="first"]').should('have.length', 1)
        cy.get('[data-test="first"]').should('not.have.value')
        cy.get('[data-test="first"]').should('have.attr', 'readOnly')

        cy.get('[data-test="second"]').should('have.length', 1)
        cy.get('[data-test="second"]').should('not.have.value')
        cy.get('[data-test="second"]').should('have.attr', 'readOnly')

        cy.get('[data-test="third"]').should('have.length', 1)
        cy.get('[data-test="third"]').should('not.have.value')
        cy.get('[data-test="third"]').should('have.attr', 'readOnly')
    })
})