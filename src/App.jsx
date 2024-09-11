import DigitalClock from './DigitalClock.jsx';
import Stopwatch from './Stopwatch.jsx';
import ResultList from './ResultList.jsx';
import React, {useEffect} from 'react';
/**
 * @author sleeplessglory <sleeplessglory@outlook.com>
 * @version 1.0.0 is available to run from GitHub Pages: {@link https://sleeplessglory.github.io/competition-records}
 * and to clone from the GitHub repository via: {@link https://github.com/sleeplessglory/competition-records}
 * @copyright sleeplessglory 2024
 * 
 * {@tutorial RunTest}
 * 
 * @component
 * @function App
 * @returns {JSX.Element} All the components and headers of an application.
 * @description Contains all the components, headers, etc. for this project.
 */
function App() {
    /**
     * @description This React useEffect() hook prevents from coincidental page reloads by warning
     * users in a pop-up window (runs only on mount). So, users don't lose their current results.
     */
    useEffect(() => {
        window.onbeforeunload = () => true;
        return () => {
          window.onbeforeunload = null;
        };
    }, []); //runs only on mount

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