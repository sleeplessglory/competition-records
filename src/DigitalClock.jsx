import React, {useState, useEffect} from 'react';
function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); //the timer starts only when we mount the component

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; //if remainer === 0 (statement's false), use "12" instead

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

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