import './App.css'
import './DayView.css'
import WeatherData from "./WeatherAPI.tsx";
import AddActivity from "./AddActivity.tsx";
import CurrentDay from "./DayView.tsx";
import {useEffect, useState} from "react";
import axios from 'axios'

function App() {

    const [weather, setWeather] = useState<undefined>();

    useEffect(() => {
        axios({
            // url: "http://api.weatherapi.com/v1/forecast.json?key=6cc628764c7547e298d143025230108&q="+ort+"&days=3&aqi=yes&alerts=no",
            url: "https://api.weatherapi.com/v1/forecast.json?key=6cc628764c7547e298d143025230108&q=Lemgo&days=3&aqi=yes&alerts=no",
            method: "get"
        }).then(function (response) {
            setWeather(response.data);
        });
    }, []);

    return (
        <>
            <div>
                <WeatherData weather={weather}/>
                <AddActivity/>
                <CurrentDay weather={weather}/>

            </div>
        </>
    )
}

export default App

