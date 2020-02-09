import React from 'react'

export const ShowWeather = props => {
     let objWeather = props.objWeather
        return (
            <>
               {objWeather && 
               <div className="showWeather" > 
                    <div className="rightField">
                    <h2>{objWeather.city} {objWeather.country}</h2>
                    <h3>temperature: {objWeather.temp}°C</h3>
                    <h3>feels like: {objWeather.feelsLike}°C</h3>
                    <h3>{objWeather.clouds}</h3> 
                    </div>
                    <div className="leftField">
                    <h3>pressure: {objWeather.pressure}hpa</h3>
                    <h3>humidity: {objWeather.humidity}%</h3>
                    <h3>wind speed: {objWeather.windSpeed}m/s</h3>
                    <h3>wind direction: {objWeather.windDeg}</h3>   
                    <h3>sunrise: {objWeather.sunrise}</h3>
                    <h3>sunset: {objWeather.sunset}</h3>
                    </div>
               </div>
              }
               {!objWeather && 
                    <p style={{textAlign: 'center'}}>enter location</p>
                   }
            </>
        )
}
