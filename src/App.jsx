import Search from "./Search";

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


