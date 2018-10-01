import React from 'react';

function Row(props) {
    const newDay = props.day;

    return (
        <div className="weather-forecast__row">
            <span className="weather-forecast__day">{newDay.weekday}</span>
            <span className="weather-forecast__icon">
                <img alt="" src={newDay.icon} />
            </span>
            <span className="weather-forecast__high">{newDay.high}</span>
            <span className="weather-forecast__low">{newDay.low}</span>
        </div>
    )


}
export default function Forecaster(props) {
    const days = props.days;
    return (
        <div>
            <div className="forecast__switch">
                <button className='forecast__switch_0 switch-active'>
                    5 days
          </button>
                <button className='forecast__switch_1'>
                    10 days
          </button>
            </div>

            {days.map((day1, index) => { return <Row key={`${day1.weekday}_${index}`} day={day1} /> })}
        </div>
    );

}




