import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";


type Activity = {
    id: string,
    activityName: string,
    possibleWhenWarm: boolean,
    possibleWhenMiddle: boolean,
    possibleWhenCold: boolean,
    possibleWhenRaining: boolean,
    possibleWithChildren: boolean,
    insideActivity: boolean,
    outsideActivity: boolean,
}

type ActivityDataProps = {
    dayActivity: Activity
}

export default function CurrentDay({ weather }) {

    const [dayActivities, setDayActivity] = useState<[]>([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5173/api"
        }).then(function (response) {
            setDayActivity(response.data);
        });
    }, []);

    function ActivityCard(props: ActivityDataProps) {
        return (
            <li className={"activityOutput"}>
                <h1>{props.dayActivity.activityName}</h1>
                <p>{props.dayActivity.id}</p>
                <button className={"btnDetails"}>details</button>
            </li>
        )
    }

    function getCurrentDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function getForecastByDate(date: string) {
        return weather?.forecast?.forecastday?.find(day => day.date === date);
    }

    const tomorrowWeather = getForecastByDate(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]);
    const dayAfterTomorrowWeather = getForecastByDate(new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]);

    function isWarm() {
        if (weather.current.temp_c >= 25) return true;
    }

    function isMiddle() {
        if (weather.current.temp_c <= 24 && weather.current.temp_c >= 17) return true;
    }

    function isCold() {
        if (weather.current.temp_c <= 16) return true;
    }

    function isRaining() {
        if (weather.current.precip_mm > 0) return true;
    }

    const filterAcitivities = dayActivities.filter(activity =>
        (activity.possibleWhenRaining || !isRaining()) &&
        (activity.possibleWhenWarm || !isWarm()) &&
        (activity.possibleWhenMiddle || !isMiddle()) &&
        (activity.possibleWhenCold || !isCold())
    );

    return (
        <div className={"flex-container"}>
            <div className={"currentDay"}>
                {dayActivities.length === 0 ? <p>loading...</p> : (
                    <div>
                        <h2>{getCurrentDate()}</h2>
                        <ul>
                            {filterAcitivities.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <div className={"tomorrow"}>
                {tomorrowWeather ? (
                    <div>
                        <h2>{tomorrowWeather.date}</h2>
                        <ul>
                            {filterAcitivities.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </ul>
                    </div>
                ) : <p>No forecast for tomorrow available</p>}
            </div>
            <div className={"theDayAftertTomorrow"}>
                {dayAfterTomorrowWeather ? (
                    <div>
                        <h2>{dayAfterTomorrowWeather.date}</h2>
                        <ul>
                            {filterAcitivities.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </ul>
                    </div>
                ) : <p>keine Daten verfügbar</p>}
            </div>
        </div>
    );
}
