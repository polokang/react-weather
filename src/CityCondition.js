import React from 'react';


export default function CityCondition(props) {
    return (
        <div>
            <div className="weather-condition__location">{props.data.city}</div>
            <div className="weather-condition__clear">{props.data.weather}</div>
            <div className="weather-condition__temp">{props.data.temp.C}</div>
            <div className="weather-condition__desc">
                <div>
                    <img src={ require('./icon/icon-umberella.png') } alt="" /> <span className="citem">{props.data.humidity}</span>
                </div>
                <div>
                    <img src={ require('./icon/icon-wind.png') } alt="" /> <span className="citem">{props.data.wind_mph} km/h</span>
                </div>
                <div>
                    <img src={ require('./icon/icon-compass.png') } alt="" /> <span className="citem">{props.data.wind_dir}</span>
                </div>
            </div>
        </div>
    );
}