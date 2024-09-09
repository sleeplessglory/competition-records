import DigitalClock from './DigitalClock.jsx';
import Stopwatch from './Stopwatch.jsx';
import ResultList from './ResultList.jsx';
import React, {useEffect} from 'react';

function App() {
    useEffect(() => { //prevents from coincidental page reloads by warning users in a pop-up window
        window.onbeforeunload = () => true;
        return () => {
          window.onbeforeunload = null;
        };
    }, []);
    return(
        <>  
            <div className="digital-clock" data-test="dig-clock">
                <DigitalClock />
            </div>
            <h1 className="greeting" data-test="header">Set activities for competitions</h1>
            <div className="stopwatches" data-test="all-stopwatches"> {/*BEM structure for SASS*/}
                <div className="stopwatches__1st" data-test="stop-1">
                    <Stopwatch>
                        <ResultList />
                    </Stopwatch>
                </div>
                <div className="stopwatches__2nd" data-test="stop-2">
                    <Stopwatch>
                        <ResultList />
                    </Stopwatch>
                </div>
                <div className="stopwatches__3rd" data-test="stop-3">
                    <Stopwatch>
                        <ResultList />
                    </Stopwatch>
                </div>
            </div>
        </>
    );
}

export default App;