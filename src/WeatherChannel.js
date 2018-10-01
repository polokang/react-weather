import React from 'react'
// import ToolBar from './Toolbar'
import CityCondition from './CityCondition'
import Forecaster from './Forecaster';
import {Icon} from 'react-fa';
import {fetchCondtionData} from './api/weather'

export default class WeatherChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curCity: 'Brisbane',
            condition: {},
            days: []
            // condition: {
            //     city: 'Brisbane, Au',
            //     temp: '12c',
            //     weather: 'Clear'
            // },
            // days: [
            //     { weekday: 'Wed', high: 23, low: 18, icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
            //     { weekday: 'Thu', high: 29, low: 18, icon: 'http://icons.wxug.com/i/c/k/chancerain.gif' },
            //     { weekday: 'Fri', high: 20, low: 10, icon: 'http://icons.wxug.com/i/c/k/chancerain.gif' }
            // ]
        }
    }

    hundleCityChange(event) {
        const value = event.target.value;
        this.setState({ curCity: value });
        
    }

    onConditionLoad(data){

        const conditionData = {
            city : data.display_location.full,
            // temp : {C: data.temp_c, F:data.temp_f},
            temp : data.temp_c,
            weather : data.weather
        }

        this.setState({condition: conditionData})
    }

    handleSearch(){
        const city = this.state.curCity;
        fetchCondtionData(city,this.onConditionLoad.bind(this))
    }

    render() {
        return (
            <div>
                <nav>
                    <div style={{ flex: 1 }}>
                        <input className="search-input" value={this.state.curCity} onChange={this.hundleCityChange.bind(this)} />
                        <button className="search-btn" onClick={this.handleSearch.bind(this)}><Icon name="search" /></button>
                        {/* <button className="search-btn" onClick={this.handleSearch.bind(this)}><i className="fa fa-search" ></i></button> */}

                    </div>
                </nav>

                <main>
                    <section className='weather-condition'>
                        <CityCondition data={this.state.condition} />
                    </section>
                    <section className='weather-forecast'>
                        <Forecaster days={this.state.days} />
                    </section>
                </main>
            </div>
        )
    }
}