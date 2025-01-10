import { useState } from "react";
import { useFetch } from "./useFetch";
import WeatherData from "./WeatherData";

export default function Search() {
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
            <button className="mx-2 p-2 font-semibold cursor-pointer bg-slate-600 hover:bg-slate-800 ease-in duration-150 rounded-3xl -translate-x-[3.2rem] translate-y-[0.3rem] w-10 h-10"><img src="/search.png" alt="search" /></button>
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
