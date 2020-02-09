import React from 'react'
export const Forecast = ({forecastData}) => {
    const getForecastDate = timestamp =>{
        let options = {
            month: 'long',
            day: 'numeric',
            weekday: 'long'
          }
          return  new Date(timestamp*1000).toLocaleString("en-US", options)
    }
    return (
        <>
          
              {forecastData &&
              <div className="forecast">
              <div className="forecast-selector">
                  <h4>{getForecastDate(forecastData.day_1.dt)}</h4>
                  <h4>min: {Math.round(forecastData.day_1.main.temp_min-273.00)}°C</h4>
                  <h4>max: {Math.round(forecastData.day_1.main.temp_max-273.00)}°C</h4>
                  <h4>{forecastData.day_1.weather[0].description}</h4>
                  </div>
              <div className="forecast-selector">
                  <h4>{getForecastDate(forecastData.day_2.dt)}</h4>
                  <h4>min: {Math.round(forecastData.day_2.main.temp_min-273.00)}°C</h4>
                  <h4>max: {Math.round(forecastData.day_2.main.temp_max-273.00)}°C</h4>
                  <h4>{forecastData.day_2.weather[0].description}</h4>
                  </div>
              <div className="forecast-selector">
                  <h4>{getForecastDate(forecastData.day_3.dt)}</h4>
                  <h4>min: {Math.round(forecastData.day_3.main.temp_min-273.00)}°C</h4>
                  <h4>max: {Math.round(forecastData.day_3.main.temp_max-273.00)}°C</h4>
                  <h4>{forecastData.day_3.weather[0].description}</h4>
                  </div>
              <div className="forecast-selector">
                  <h4>{getForecastDate(forecastData.day_4.dt)}</h4>
                  <h4>min: {Math.round(forecastData.day_4.main.temp_min-273.00)}°C</h4>
                  <h4>max: {Math.round(forecastData.day_4.main.temp_max-273.00)}°C</h4>
                  <h4>{forecastData.day_4.weather[0].description}</h4>
                  </div>
              <div className="forecast-selector">
                  <h4>{getForecastDate(forecastData.day_5.dt)}</h4>
                  <h4>min: {Math.round(forecastData.day_5.main.temp_min-273.00)}°C</h4>
                  <h4>max: {Math.round(forecastData.day_5.main.temp_max-273.00)}°C</h4>
                  <h4>{forecastData.day_5.weather[0].description}</h4>
                  </div>
              </div>
            } 
          
        </>
    )
}