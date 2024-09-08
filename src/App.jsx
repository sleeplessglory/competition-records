import DigitalClock from './DigitalClock.jsx';
import Stopwatch from './Stopwatch.jsx';
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
            <div className="digital-clock">
                <DigitalClock />
            </div>
            <h1 className="greeting">Set activities for competitions</h1>
            <div className="stopwatches"> {/*BEM structure for SASS*/}
                <div className="stopwatches__1st">
                    <Stopwatch /> {/*Stopwatch and its result list for the 1st activity*/}
                </div>
                <div className="stopwatches__2nd">
                    <Stopwatch /> {/*Stopwatch and its result list for the 2nd activity*/}
                </div>
                <div className="stopwatches__3rd">
                    <Stopwatch /> {/*Stopwatch and its result list for the 3rd activity*/}
                </div>
            </div>
        </>
    );
}

export default App;