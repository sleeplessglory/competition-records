import Stopwatch from '../../src/Stopwatch.jsx';
import '../../src/scss/style.css';

describe('<Stopwatch />', () => {
    it('mounts', () => {
        cy.mount(<Stopwatch />) //<ResultList /> is displayed too (since <Stopwatch />'s child)
    })
    it('', () => { //the better testing experience is within E2E "functionality.cy.jsx"
        cy.mount(<Stopwatch />)
    })
})