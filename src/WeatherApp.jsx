import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

function WeatherApp(){
   let [weatherinfo,setWeatherinfo]=useState({
        city:"Mumbai",
        temp:31.04,
        temp_max:30.04,
        temp_min:30.04,
        humidity:33,
        feels_like:29.03,
        weather:"clear sky"

   });

   let handleweather= (newinfo)=>{
        setWeatherinfo(newinfo);
   }

 

    return(
        <div>
           <SearchBox updateweather={handleweather}/>
           <InfoBox infoweather={weatherinfo}/>
        </div>
    )
}

export default WeatherApp