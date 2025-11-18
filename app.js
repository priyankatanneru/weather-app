require('dotenv').config();
const axios = require('axios');

const city = 'London';
const apiKey = process.env.API_KEY;

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => {
    console.log(`Weather in ${city}:`, response.data.weather[0].description);
  })
  .catch(error => console.error(error));
