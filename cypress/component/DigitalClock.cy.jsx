import DigitalClock from '../../src/DigitalClock.jsx';
import '../../src/scss/style.css';

describe('<DigitalClock />', () => {
    it('mounts', () => {
        cy.mount(<DigitalClock />)
    })
    it('', () => { //the better testing experience is within E2E "functionality.cy.jsx"
        cy.mount(<DigitalClock />)
        
    })
})