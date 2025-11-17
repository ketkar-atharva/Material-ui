import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function InfoBox({infoweather}){
   
    return(
        <div>
         <h2>Weather info</h2>
    <Card sx={{ minWidth: 275 }} className='card'>
      <CardContent>
        <Typography gutterBottom sx={{  fontSize: 22 }}>
          {infoweather.city}
        </Typography>
        <Typography variant="h6" component="div">
            <p>Temp= {infoweather.temp}&deg;C</p>
          <p>feels like={infoweather.feels_like}&deg;C</p>
          <p>Humidity= {infoweather.humidity}</p>
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{infoweather.weather}</Typography>
        <Typography variant="body2">

        </Typography>
      </CardContent>

    </Card>
        </div>
    )
}

export default InfoBox