/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import './Tempapp.css'
import weather from './weather.png'


const Tempapp = () => {

  const [city, setcity] = useState(null)
  const [search, setsearch] = useState("Lucknow")

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=1622de555cb046c5ab4194043211504&q=${search}&aqi=no`;
      const response = await fetch(url)
      const resjson = await response.json()
      console.log(resjson)
      setcity(resjson.current)
      
    }
    fetchapi();

  }, [search]);

  return (

    <div className="container my-5">
      <h1 className="text-center fn bold">Weather Check</h1>
      <br/>
      <div className="p-4 p-md-5 mb-4 text-white rounded  card">
        <div className="col-md-12 px-0">
      <img src={weather} alt="weather" className="img"/>
   
        <div className="col-md-6 px-0">
          <input className="form-control me- fn" type="search" placeholder="Search" aria-label="Search"
            onChange={(Event) => {
              setsearch(Event.target.value)
            }} />
           
          {!city ? (
            <p className="fn my-4 ">No data Found</p>
            )
            : (
              <div className="my-4">

                <svg className="bi bi-geo-alt" xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <h5 className="bi bi-geo-alt fn text">{search}</h5>
               
                
                <br/>
                <br/>
                
               
                <h2 className=" lead fn bold ">{city.is_day==1 ?(<p className=" lead ">Day</p>):(<p className=" lead ">Night</p>)}</h2>
                <h2 className=" lead fn">condition: {city.condition.text}</h2>
                <h2 className=" lead fn">Temperature: {city.temp_c} cel</h2>
                <h2 className=" lead fn">Humidity: {city.humidity} </h2>
                <h2 className=" lead fn">Wind direction: {city.wind_dir}</h2>
                <h2 className=" lead fn ">Wind speed: {city.wind_kph}km/hr</h2>


              </div>
            )
            
          }

        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Tempapp;