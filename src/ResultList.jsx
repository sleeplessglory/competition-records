import PropTypes from 'prop-types';
/**
 * @component
 * @function ResultList
 * @param {Object} props The props object.
 * @param {string} props.activity A stateful variable containing a current activity name.
 * @param {Function} props.activitySetter A setter function to update an activity name.
 * @returns {JSX.Element} The activity name and three read-only results of competitors.
 * @description Contains all the input fields of a stopwatch with their logic programmed.
 */
function ResultList(props){
    /**
     * @function handleChange
     * @param {Event} event The input event triggered by users.
     * @description Handles changes in the input field by updating the activity name state.
     */
    function handleChange(event) {
        props.activitySetter(event.target.value);
    }
    
    return(
        <div className="results" data-test="results"> {/*BEM structure for SASS*/}
            <input type="text" className="results__activity" data-test="activity" onChange={handleChange}
                            value={props.activity} spellCheck="false" placeholder="Enter activity name" /><br />
            <input type="text" className="results__1st" data-test="first"
                            value={props.firstPlace} readOnly /><br />
            <input type="text" className="results__2nd" data-test="second"
                            value={props.secondPlace} readOnly /><br />
            <input type="text" className="results__3rd" data-test="third"
                            value={props.thirdPlace} readOnly />
        </div>
    );
}
ResultList.propTypes = {
    activity: PropTypes.string,
    firstPlace: PropTypes.string,
    secondPlace: PropTypes.string,
    thirdPlace: PropTypes.string
}
ResultList.defaultProps = {
    activity: "",
    firstPlace: "",
    secondPlace: "",
    thirdPlace: ""
}
export default ResultList;