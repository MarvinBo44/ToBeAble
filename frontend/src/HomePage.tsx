import WeatherData from "./WeatherAPI.tsx";
import AddActivity from "./AddActivity.tsx";
import CurrentDay from "./DayView.tsx";
import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function HomePage(){

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

    const nav = useNavigate();
    function logout(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        axios.post("/api/user/logout")
            .then((response) => console.log(response.data))
            .then(()=>nav("/"))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <form onSubmit={logout}>
                <button>logout</button>
            </form>
            <WeatherData weather={weather}/>
            <AddActivity/>
            <CurrentDay weather={weather}/>
        </div>
    )
}