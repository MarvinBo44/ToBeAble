import './App.css'
import WeatherData from "./WeatherAPI.tsx";
import AddActivity from "./AddActivity.tsx";

function App() {

  return (
    <>
      <div>
        <WeatherData/>
          <AddActivity/>
      </div>
    </>
  )
}

export default App
