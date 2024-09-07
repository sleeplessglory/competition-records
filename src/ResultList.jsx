function ResultList(){
    return(
        <div className="results"> {/*BEM structure for SASS*/}
            <input type="text" className="results__activity" placeholder="Enter activity name" /><br />
            <input type="text" className="results__1st" readOnly={true} /><br />
            <input type="text" className="results__2nd" readOnly={true} /><br />
            <input type="text" className="results__3rd" readOnly={true} />
        </div>
    );
}
export default ResultList;