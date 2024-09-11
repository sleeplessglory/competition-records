import React, {useState, useEffect} from 'react';
/**
 * @component
 * @function DigitalClock
 * @returns {JSX.Element} The digital clock showing the current local time with meridiems.
 * @description Contains the main logic of how the digital clock works.
 */
function DigitalClock(){
    /**
     * @typedef {(Date|function(Date))}
     * @description
     * time - A stateful variable containing the current local time.
     * setTime - A setter function updating the current local time.
     */
    const [time, setTime] = useState(new Date());

    /**
     * @description This React useEffect() hook updates the current local time every 1000ms = 1s. Runs on mount.
     */
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); //the timer runs only when we mount the component

    /**
     * @function formatTime
     * @returns {string} A formatted string of the current local time (with meridiems specified).
     * @description Formats the result and displays it on the page as the current local time.
     */
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; //if remainer === 0 (statement's false), use "12" instead

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    
    /**
     * @function padZero
     * @param {number} number Hours, minutes or seconds being passed to be formatted.
     * @returns Formatted hours, minutes or seconds if < 10 (only one digit). Otherwise the same number back.
     * @description This function checks if a passed number contains 1 digit or not.
     * Adds "0" before it, if contains only 1 digit.
     */
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span data-test="dig-clock">{formatTime()}</span>
                </div>
            </div>
        </>
    );
}
export default DigitalClock;