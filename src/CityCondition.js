import React from 'react';


export default function CityCondition(props) {
    return (
        <div>
            <div className="weather-condition__location">{props.data.city}</div>
            <div className="weather-condition__temp">{props.data.temp}</div>
        </div>
    );
}