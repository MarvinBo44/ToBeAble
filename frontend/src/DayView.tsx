import './App.css';

import {Weather, Activity} from "./HomePage.tsx";

type WeatherProps = {
    weather: Weather | undefined;
    dayActivities: Activity[];
}

type ActivityDataProps = {
    dayActivity: Activity
}

export default function DayView(props: WeatherProps) {

    function ActivityCard(props: ActivityDataProps) {
        return (
            <li className={"activityOutput"}>
                <h1>{props.dayActivity.activityName}</h1>
                {/*<p>{props.dayActivity.id}</p>*/}
                {/*<button className={"btnDetails"}>details</button>*/}
            </li>
        )
    }

    // function getCurrentDate(): string {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = (today.getMonth() + 1).toString().padStart(2, '0');
    //     const day = today.getDate().toString().padStart(2, '0');
    //     return `${year}-${month}-${day}`;
    // }

    function getForecastByDate(date: string) {
        return props.weather?.forecast?.forecastday?.find(day => day.date === date);
    }

    const tomorrowWeather = getForecastByDate(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]);
    const dayAfterTomorrowWeather = getForecastByDate(new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]);

    function isWarm() {
        if (props.weather != undefined) {
            if (props.weather.current.temp_c >= 25) {
                return true;
            }
        }
    }

    function isMiddle() {
        if (props.weather != undefined) {
            if (props.weather.current.temp_c >= 10 && props.weather.current.temp_c <= 24) {
                return true;
            }
        }
    }

    function isCold() {
        if (props.weather != undefined) {
            if (props.weather.current.temp_c < 10) {
                return true;
            }
        }
    }

    function isRaining() {
        if (props.weather != undefined) {
            if (props.weather.current.precip_mm > 0) {
                return true;
            }
        }
    }

    const filterAcitivities = props.dayActivities.filter((activity) =>{
        return (activity.possibleWhenWarm === isWarm()  ||
            activity.possibleWhenMiddle === isMiddle()  ||
            activity.possibleWhenCold === isCold()) &&
            (activity.possibleWhenRaining ? true : activity.possibleWhenRaining === !isRaining)
    });

        // const filterAcitivities = props.dayActivities.filter(activity =>
        // (activity.possibleWhenRaining || !isRaining()) &&
        // (activity.possibleWhenWarm || !isWarm()) &&
        // (activity.possibleWhenMiddle || !isMiddle()) &&
        // (activity.possibleWhenCold || !isCold())
        // );

    return props.weather === undefined ? <div>loading...</div> : (
        <div className={"flex-container"}>
            <div className={"currentDay"}>
                {props.dayActivities.length === 0 ? <p>loading...</p> : (
                    <div>
                        {/*<h2>{getCurrentDate()}</h2>*/}
                        <h2>Heute</h2>
                        <div className={"activityBox"}>
                            {filterAcitivities.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className={"tomorrow"}>
                {tomorrowWeather ? (
                    <div>
                        {/*<h2>{tomorrowWeather.date}</h2>*/}
                        <h2>Morgen</h2>
                        <div className={"activityBox"}>
                            {filterAcitivities.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </div>
                    </div>
                ) : <p>No forecast for tomorrow available</p>}
            </div>
            <div className={"theDayAftertTomorrow"}>
                {dayAfterTomorrowWeather ? (
                    <div>
                        {/*<h2>{dayAfterTomorrowWeather.date}</h2>*/}
                        <h2>Übermorgen</h2>
                        <div className={"activityBox"}>
                            {filterAcitivities.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </div>
                    </div>
                ) : <p>keine Daten verfügbar</p>}
            </div>
        </div>
    );
}
