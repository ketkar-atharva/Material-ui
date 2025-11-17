import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './SearchBox.css'
import { useState } from 'react';
function SearchBox(){
    let [city,setCity]=useState("");
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="2f9008a7a670becc6c13c779f1bef35d"

     let  getcity= async()=>{
        let resposne =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await resposne.json();
        let result={
            temp:jsonresponse.main.temp,
            temp_max:jsonresponse.main.temp_max,
            temp_min:jsonresponse.main.temp_min,
            humidity:jsonresponse.main.humidity,
            feels_like:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
          
        }
        console.log(result);
     }


    let handleChange=(eve)=>{
        setCity(eve.target.value);
    }

    let handleSubmit=(eve)=>{
         eve.preventDefault();
         console.log(city);
         setCity("");
         getcity();
    }


    return(
        <div >
            <h2>Search box</h2><br></br>
           <div className='searchbox'>
             <form onChange={handleChange}>
             <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange} />
             <Button variant="outlined" endIcon={<SendIcon />} type='submit' size="small" id='searchbtn' onClick={handleSubmit}>Search</Button>
            </form>
           </div>
        </div>
    )
}

export default SearchBox