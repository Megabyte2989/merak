import React, { useEffect, useState } from 'react';


function Timer() {


    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);



    return (
        <div>{currentTime.toLocaleString()}
        </div>
    )
}

export default Timer