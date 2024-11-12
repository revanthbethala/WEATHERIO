/* eslint-disable react/prop-types */
import { useState } from "react";
import { useFetch } from "./useFetch"

export default function App() {
  return (
    <div className="h-screen bg-gradient-to-tl from-sky-300 to-violet-400">
      <div className="flex items-center justify-center p-5 flex-col gap-10">
        <h1 className="font-bold text-3xl text-fuchsia-900 animate-bounce font-lora ">WEATHERIO</h1>
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
      <form onSubmit={handleSubmit} className="py-6">
        <input type="text" name="cityName" placeholder="Search for a Place..." value={city} onChange={e => setCity(e.target.value)} autoFocus
          className=" md:w-[38rem] h-12 bg-white px-3 rounded-3xl border-none font-semibold" />
        <button className="mx-2 p-2 font-semibold cursor-pointer bg-slate-600 hover:bg-slate-800 ease-in duration-150 rounded-3xl -translate-x-[3.2rem] translate-y-[0.3rem] w-10 h-10"><img src="src/assets/search.png" alt="search" /></button>
      </form >
      <div>
        {(isLoading && !error) && <div className="w-10 h-10 my-40 border-dotted rounded-full border-slate-700 border-8 animate-spin delay-200 ease-in"></div>}
        {error && <p className="text-2xl text-red-700 font-semibold py-24">{error}</p>}
        {!error && !isLoading && fetchCity &&
          <WeatherData weatherDetails={weatherDetails} />
        }
      </div>
    </div>
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
        <p className="font-bold text-xl">Atm Pressure <br />{pressure}mbar</p>
        <p className="font-bold text-xl">Humidity <br />{humidity}%</p>
        <p className="font-bold text-xl">Wind Speed <br />{windSpeed}m/s</p>
        <p className="font-bold text-xl">Weather  <br />{climate}</p>
      </div>
    </div>
  )
}