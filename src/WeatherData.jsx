/* eslint-disable react/prop-types */

export default function WeatherData({ weatherDetails }) {
   const { place, temp, pressure, humidity, feelsLike, climate, windSpeed } = weatherDetails
   return (
      <div className="p-5 w-full flex flex-col justify-center items-center gap-4 font-lora rounded-2xl bg-white">
         <h2 className="font-semibold text-2xl text-center py-2">CITY : {place?.toUpperCase()}</h2>
         <div className="w-20 h-20">
            <img src={`/cloudy.png`} alt="image" />
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