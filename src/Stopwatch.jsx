import React, {useState, useEffect, useRef} from 'react';
import ResultList from './ResultList.jsx';
/**
 * The function contains the main logic of how every stopwatch works
 * using useState, useEffect and useRef React hooks
 * @returns The stopwatch elements and the current elapsed time
 */
function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    
    const stopCount = useRef(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    const startRef = useRef(null);
    const stopRef = useRef(null);
    const resetRef = useRef(null);
    
    let [act, setAct] = useState("");
    let [first, setFirst] = useState(""); 
    let [second, setSecond] = useState(""); 
    let [third, setThird] = useState(""); 
    
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
    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        if(isRunning) {
            switch(stopCount.current){
                case 0: //since React's initial rendering
                    setFirst(formatTime());
                    console.log(first);
                    break;
                case 1:
                    setSecond(formatTime());
                    break;
                case 2:
                    setThird(formatTime());
                    setIsRunning(false);
                    toggleClasses();
                    break;
            }
            stopCount.current++;
            console.log(stopCount);
        }
    }

    function reset(){
        if(stopRef.current.classList.contains("start-stop-hide")) {
            stopCount.current = 0;
            toggleClasses();
            setAct("");
            setFirst("");
            setSecond("");
            setThird("");
        }
        setElapsedTime(0);
        setIsRunning(false);
    }

    function toggleClasses(){
        startRef.current.classList.toggle("start-stop-hide");
        stopRef.current.classList.toggle("start-stop-hide");
        resetRef.current.classList.toggle("reset-hint");
    }

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