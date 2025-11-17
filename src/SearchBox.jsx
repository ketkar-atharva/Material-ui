import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import { useState } from 'react';
function SearchBox({updateweather}){
    let [city,setCity]=useState("");
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="2f9008a7a670becc6c13c779f1bef35d"

     let  getcity= async()=>{
        let resposne =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await resposne.json();
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            temp_max:jsonresponse.main.temp_max,
            temp_min:jsonresponse.main.temp_min,
            humidity:jsonresponse.main.humidity,
            feels_like:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
          
        }
        console.log(result);
        return result;
     }


    let handleChange=(eve)=>{
        setCity(eve.target.value);
    }

    let handleSubmit= async(eve)=>{
         eve.preventDefault();
         console.log(city);
         setCity("");
        let newinfo= await getcity();
        updateweather(newinfo);
    }


    return(
        <div >
            <h2>Search Weather</h2><br></br>
           <div className='searchbox'>
             <form onChange={handleChange}>
             <TextField className="myTextField" id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange} />
             <Button variant="contained" endIcon={<SearchIcon />} type='submit' size="small" id='searchbtn' onClick={handleSubmit}>Search</Button>
            </form>
           </div>
        </div>
    )
}

export default SearchBox