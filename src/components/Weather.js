import React from 'react'
import { useSelector} from 'react-redux'
import { selectWeatherData } from '../reducers/reducer'

export const Weather = () => {

    const weatherData = useSelector(selectWeatherData)

    return (
        <div>
            <div className="weather__data">
                <h1>{weatherData.main?.temp} Degree celcius</h1>
                <h5>{weatherData?.name}, India</h5>
            </div>
        </div>
    )
} 

export default Weather;