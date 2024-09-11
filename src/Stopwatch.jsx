import React, {useState, useEffect, useRef} from 'react';
import ResultList from './ResultList.jsx';
/**
 * @component
 * @function Stopwatch
 * @returns {JSX.Element} The stopwatch elements and the current elapsed time.
 * @description Contains the main logic of how every stopwatch works using React hooks.
 */
function Stopwatch() {
    /**
     * @typedef {(boolean|function(boolean))}
     * @description 
     * isRunning - A stateful variable containing the stopwatch running state.
     * setIsRunning - A setter function updating the stopwatch running state.
     */
    const [isRunning, setIsRunning] = useState(false);

    /**
     * @typedef {(number|function(number))}
     * @description 
     * elapsedTime - A stateful variable containing the current elapsed time (since "start").
     * setElapsedTime - A setter function updating the current elapsed time.
     */
    const [elapsedTime, setElapsedTime] = useState(0);

    /**
     * @type {React.RefObject<number>}
     * @description The current amount of clicks on the "stop" button (0 initially).
     */
    const stopCount = useRef(0);

    /**
     * @type {React.RefObject<number|null>}
     * @description The current interval ID or null (initially).
     */
    const intervalIdRef = useRef(null);

    /**
     * @type {React.RefObject<number>}
     * @description The current start time (initially 0).
     */
    const startTimeRef = useRef(0);

    /**
     * @type {React.RefObject<number>}
     * @description A reference to a "start" button (initially is null).
     * This reference is used in order to add dynamic classes (CSS will be applied too).
     */
    const startRef = useRef(null);

    /**
     * @type {React.RefObject<number>}
     * @description A reference to a "stop" button (initially is null).
     * This reference is used in order to add dynamic classes (CSS will be applied too).
     */
    const stopRef = useRef(null);

    /**
     * @type {React.RefObject<number>}
     * @description A reference to a "reset" button (initially is null).
     * This reference is used in order to add dynamic classes (CSS will be applied too).
     */
    const resetRef = useRef(null);

    /**
     * @typedef {(string|function(string))}
     * @description These variable and setter fuction are used to reset stopwatch data.
     * act - A stateful variable for activity name.
     * setAct - A setter function updating the current activity name.
     */
    let [act, setAct] = useState("");

    /**
     * @typedef {(string|function(string))}
     * @description These variable and setter fuction are used to store and update the 1st result (gold).
     * first - A stateful variable for the 1st result.
     * setFirst - A setter function updating the state of the 1st result.
     */
    let [first, setFirst] = useState("");

    /**
     * @typedef {(string|function(string))}
     * @description These variable and setter fuction are used to store and update the 2nd result (silver).
     * second - A stateful variable for the 2nd result.
     * setSecond - A setter function updating the state of the 2nd result.
     */
    let [second, setSecond] = useState("");

    /**
     * @typedef {(string|function(string))}
     * @description These variable and setter fuction are used to store and update the 3rd result (bronze).
     * third - A stateful variable for the 3rd result.
     * setThird - A setter function updating the state of the 3rd result.
     */
    let [third, setThird] = useState(""); 

    /**
     * @description Updates the elapsed time on stopwatch when it's running ("start" is clicked).
     * Updating every 10ms = 0.01s.
     */
    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
                //Date.now() is a current date in milliseconds since the epic time (around 1970)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]); //when it's running

    /**
     * @function start
     * @description Sets the "isRunning" variable to be "true".
     * Assigns the time when it was started to a "startTimeRef" variable.
     */
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        stopRef.current.classList.add("stop-reset-hint");
    }

    /**
     * @function stop
     * @description Counts the amount of clicks on a "stop" button and after 3 clicks sets "isRunning" to be "false".
     * Also after 3 clicks adds dynamic classes to all the buttons (in order to apply new CSS).
     * With every click on a button it sets the result for every competitor (3 people).
     */
    function stop(){
        if(isRunning) {
            switch(stopCount.current){
                case 0: //since React's initial rendering
                    setFirst(formatTime());
                    break;
                case 1:
                    setSecond(formatTime());
                    break;
                case 2:
                    setThird(formatTime());
                    setIsRunning(false);
                    handleClasses();
                    break;
            }
            stopCount.current++;
        }
    }

    /**
     * @function reset
     * @description After 3 clicks on a "stop" button removes dynamic classes and sets all the results 
     * with the activity name to default, if those classes are currently added.
     * Otherwise users can't reset the stopwatch unless a "stop" button is clicked 3 times (preventing
     * from accidental data loss).
     */
    function reset(){
        if(stopRef.current.classList.contains("start-stop-hide")) {
            stopCount.current = 0;
            handleClasses();
            setAct(""); //these 6 setter functions work after 3 clicks on a "stop" button
            setFirst(""); //so, users don't accidentally remove any result or an activity name
            setSecond("");
            setThird("");
            setElapsedTime(0);
            setIsRunning(false);
        }
    }

    /**
     * @function handleClasses
     * @description Toggles the dynamic classes for all buttons. Adds if absent or removes if present. 
     * Removes the hint for a "stop" button.
     */
    function handleClasses(){
        stopRef.current.classList.remove("stop-reset-hint");
        startRef.current.classList.toggle("start-stop-hide");
        stopRef.current.classList.toggle("start-stop-hide");
        resetRef.current.classList.toggle("stop-reset-hint");
    }
    
    /**
     * @function formatTime
     * @description Formats the result and displays it on a stopwatch with the pattern.
     * @returns {string} A formatted string of the elapsed time since "start" was clicked on.
     */
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <>
            <div className="stopwatch-elements" data-test="stopwatch-container">
                <div className="display" data-test="elapsed">{formatTime()}</div>
                <div className="controls">
                    <button onClick={start} className="start-button" ref={startRef} data-test="start">Start</button>
                    <button onClick={stop} className="stop-button" ref={stopRef} data-test="stop">Stop</button>
                    <button onClick={reset} className="reset-button" ref={resetRef} data-test="reset">Reset</button>
                </div>
            </div>
            <ResultList firstPlace={first} secondPlace={second} thirdPlace={third}
                        activity={act} activitySetter={setAct}/>
        </>
    );
}
export default Stopwatch;