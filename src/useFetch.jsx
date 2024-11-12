import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
export function useFetch({ cityName }) {

   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState("")
   const [weatherDetails, setWeatherDetails] = useState({})


   useEffect(() => {
      if (!cityName) {
         return;
      }
      async function fetching() {
         try {
            setError("")
            setIsLoading(true)
            const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
            const response = await request.json();
            console.log(response)
            if (request.ok === false)
               throw new Error("City not found!")
            console.log(response)
            setWeatherDetails({
               place: response.name,
               temp: response.main.temp,
               min_temp: response.main.temp_min,
               max_temp: response.main.temp_max,
               humidity: response.main.humidity,
               pressure: response.main.pressure,
               feelsLike: response.main.feels_like,
               windSpeed: response.wind.speed,
               climate: response.weather[0].main,
            })
         }
         catch (error) {
            console.log(error.message)
            setError(error.message)
         }
         finally {
            setIsLoading(false)
         }
      }
      fetching();
   }, [cityName]);
   return { isLoading, error, weatherDetails }
}