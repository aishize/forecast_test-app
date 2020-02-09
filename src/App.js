import React from 'react'
import {useState} from 'react'
import {Form} from './components/Form'
import  {ShowWeather} from './components/ShowWeather'
import {Forecast} from './components/Forecast'

const API = 'c66ab0d81ec3e7656c4a8537821f857e'

const toNormalTime = timestamp => {
  let options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  return  new Date(timestamp * 1000).toLocaleString("ru", options)
}
const App = () => { 
  const [state, setState] = useState()
  const [list, setList] = useState()

  const getForecast = async id => {
    try{
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API}`)
      const listData = await api_url.json()
      setList({
        day_1: listData.list[0],
        day_2: listData.list[9],
        day_3: listData.list[17],
        day_4: listData.list[25],
        day_5: listData.list[33]
      })
    }catch(e){
      console.error(e.message)
    }
 }
  const getWeather = async (event) => {
    try{
      event.preventDefault()
      const city = event.target.elements.city.value
      if (city) {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
        const weatherData = await api_url.json()
        let id = weatherData.id
        setState({
          city: weatherData.name,
          country: weatherData.sys.country,
          temp: Math.round(Number(weatherData.main.temp) -273),
          feelsLike: Math.round(Number(weatherData.main.feels_like) -273),
          sunrise: toNormalTime(weatherData.sys.sunrise),
          sunset: toNormalTime(weatherData.sys.sunset),
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
          windSpeed: weatherData.wind.speed,
          windDeg: weatherData.wind.deg,
          clouds: weatherData.weather[0].description,
        })
        getForecast(id)
       }
       
    }catch(e){
      alert('this place was not found, specify the name and try again')
      console.error(`error: ${e.message}`)
    }
 }

 const getMyWeather = event => {
 
    event.preventDefault()
     navigator.geolocation.getCurrentPosition( async position => {
      try{
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API}`)
        const weatherData = await api_url.json()
        let id = weatherData.id
        setState({
          city: weatherData.name,
          country: weatherData.sys.country,
          temp: Math.round(Number(weatherData.main.temp) -273),
          feelsLike: Math.round(Number(weatherData.main.feels_like) -273),
          sunrise: toNormalTime(weatherData.sys.sunrise),
          sunset: toNormalTime(weatherData.sys.sunset),
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
          windSpeed: weatherData.wind.speed,
          windDeg: weatherData.wind.deg,
          clouds: weatherData.weather[0].description,
      })
      getForecast(id)
    }catch(e){
      alert('this place was not found, specify the name and try again')
      console.error(`error: ${e.message}`)
    }
  })
}


  return (
    <div className="container">
      <div className="main"> 
      <Form inputLocation = {getWeather} geoLocation = {getMyWeather} />
      <ShowWeather objWeather={state} />
      <Forecast forecastData = {list}/>
      </div>
    </div>
  )
}

export default App