import PropTypes from 'prop-types';
/**
 * 
 * @returns The activity name and three read-only time records of competitors
 */
function ResultList(props){
    function handleChange(event) {
        props.activitySetter(event.target.value);
    }
    return(
        <div className="results"> {/*BEM structure for SASS*/}
            <input type="text" className="results__activity" onChange={handleChange}
                            value={props.activity} spellCheck="false" placeholder="Enter activity name" /><br />
            <input type="text" className="results__1st" 
                            value={props.firstPlace} readOnly={true} /><br />
            <input type="text" className="results__2nd" 
                            value={props.secondPlace} readOnly={true} /><br />
            <input type="text" className="results__3rd" 
                            value={props.thirdPlace} readOnly={true} />
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