import React, {useEffect, useState} from 'react';
import s from './AnalogClock.module.css'


const AnalogClock = () => {

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = date.getHours() * 30
    const minute = date.getMinutes() * 6
    const second = date.getSeconds() * 6

    return (
        <div className={s.clock}>
            <div className={s.hours}
                 style={{ transform: "rotate(" + hour + "deg)" }}
            ></div>
            <div className={s.minutes}
                 style={{ transform: "rotate(" + minute + "deg)" }}
            ></div>
            <div className={s.seconds}
                 style={{ transform: "rotate(" + second + "deg)"}}
            ></div>
        </div>
    );
};

export default AnalogClock;