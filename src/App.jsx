import DigitalClock from './DigitalClock.jsx';
import Stopwatch from './Stopwatch.jsx';
import ResultList from './ResultList.jsx';

function App() {
    return(
        <>  
            <div className="digital-clock">
                <DigitalClock />
            </div>
            <h1 className="greeting">Set activities for competitions</h1>
            <div className="stopwatches"> {/*BEM structure for SASS*/}
                <div className="stopwatches__1st">
                    <Stopwatch /> {/*Stopwatch and its result list for the 1st activity*/}
                    <ResultList />
                </div>
                <div className="stopwatches__2nd">
                    <Stopwatch /> {/*Stopwatch and its result list for the 2nd activity*/}
                    <ResultList />
                </div>
                <div className="stopwatches__3rd">
                    <Stopwatch /> {/*Stopwatch and its result list for the 3rd activity*/}
                    <ResultList />
                </div>
            </div>
        </>
    );
}

export default App;