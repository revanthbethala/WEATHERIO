/* eslint-disable react/prop-types */
import { useState } from "react";
import { useFetch } from "./useFetch"

export default function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-sky-300 to-blue-200">
      <div className="flex items-center justify-center p-5 flex-col gap-10">
        <h1 className="font-bold text-3xl text-orange-500">WEATHERIO</h1>
        <Search />
      </div>
    </div>
  )
}

function Search() {
  const [city, setCity] = useState("");
  const [fetchCity, setFetchCity] = useState(null)
  const { isLoading, error, weatherDetails } = useFetch({ cityName: fetchCity });
  function handleSubmit(e) {
    e.preventDefault();
    setFetchCity(city);
    setCity("");
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="p-3">
        <input type="text" name="cityName" placeholder="Search for a Place..." value={city} onChange={e => setCity(e.target.value)} autoFocus
          className=" md:w-[30rem] h-12 bg-white p-2 rounded-md  border-stone-700 border-2 " />
        <input type="submit" value="Search" className="p-2 font-bold text-green-800 text-xl cursor-pointer" />
      </form >
      <div>
        {isLoading || error && <Loader isLoading={isLoading} error={error} />}
        {!error && !isLoading && fetchCity &&
          <WeatherData weatherDetails={weatherDetails} />
        }
      </div>
    </div>
  )
}

function Loader({ isLoading, error }) {
  return (
    <h1 className={`text-center font-bold text-2xl py-20 ${error && "text-red-600"}`}>{isLoading && !error ? "Loading... " : error + " Please try again"}</h1>
  )
}

function WeatherData({ weatherDetails }) {
  const { place, temp, pressure, humidity, feelsLike, climate, windSpeed } = weatherDetails
  return (
    <div className="p-5 w-full flex flex-col justify-center items-center gap-4 font-lora rounded-2xl bg-white">
      <h2 className="font-semibold text-2xl text-center py-2">CITY : {place?.toUpperCase()}</h2>
      <div className="w-20 h-20">
        <img src={`src/assets/cloudy.png`} alt="image" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-between justify-center">
        <p className="font-bold text-xl">Actual Temp <br />{temp}°C</p>
        <p className="font-bold text-xl">Feels Like <br />{feelsLike}°C</p>
        <p className="font-bold text-xl">Atm Pressure <br />{pressure}mb</p>
        <p className="font-bold text-xl">Humidity <br />{humidity}%</p>
        <p className="font-bold text-xl">Wind Speed <br />{windSpeed}m/s</p>
        <p className="font-bold text-xl">Weather  <br />{climate}</p>
      </div>
    </div>
  )
}