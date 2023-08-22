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

    function getForecastByDate(date: string) {
        return props.weather?.forecast?.forecastday?.find(day => day.date === date);
    }

    const tomorrowWeather = getForecastByDate(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]);
    const dayAfterTomorrowWeather = getForecastByDate(new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]);

    function isWarmToday() {
        if (props.weather != undefined) {
            if (props.weather.current.temp_c >= 25) {
                return true;
            }
        }
    }

    function isWarmTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[1].day.maxtemp_c >= 25) {
                return true;
            }
        }
    }

    function isWarmDayAfterTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[2].day.maxtemp_c >= 25) {
                return true;
            }
        }
    }

    function isMiddleToday() {
        if (props.weather != undefined) {
            if (props.weather.current.temp_c >= 10 && props.weather.current.temp_c <= 24) {
                return true;
            }
        }
    }
    function isMiddleTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[1].day.maxtemp_c >= 10 && props.weather.forecast.forecastday[1].day.maxtemp_c <= 24) {
                return true;
            }
        }
    }

    function isMiddleDayAfterTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[2].day.maxtemp_c >= 10 && props.weather.forecast.forecastday[2].day.maxtemp_c <= 24) {
                return true;
            }
        }
    }

    function isColdToday() {
        if (props.weather != undefined) {
            if (props.weather.current.temp_c < 10) {
                return true;
            }
        }
    }


    function isColdTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[1].day.maxtemp_c < 10) {
                return true;
            }
        }
    }

    function isColdDayAfterTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[2].day.maxtemp_c < 10) {
                return true;
            }
        }
    }

    function isRainingToday() {
        if (props.weather != undefined) {
            if (props.weather.current.precip_mm > 0) {
                return true;
            }
        }
    }
    function isRainingTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[1].day.daily_chance_of_rain > 0) {
                return true;
            }
        }
    }

    function isRainingDayAfterTomorrow() {
        if (props.weather != undefined) {
            if (props.weather.forecast.forecastday[2].day.daily_chance_of_rain > 0) {
                return true;
            }
        }
    }

    const filterAcitivitiesToday = props.dayActivities.filter(activity =>
        (activity.possibleWhenRaining || !isRainingToday()) &&
        (activity.possibleWhenWarm || !isWarmToday()) &&
        (activity.possibleWhenMiddle || !isMiddleToday()) &&
        (activity.possibleWhenCold || !isColdToday())
    );

    const filterAcitivitiesTomorrow = props.dayActivities.filter(activity =>
        (activity.possibleWhenRaining || !isRainingTomorrow()) &&
        (activity.possibleWhenWarm || !isWarmTomorrow()) &&
        (activity.possibleWhenMiddle || !isMiddleTomorrow()) &&
        (activity.possibleWhenCold || !isColdTomorrow())
    );

    const filterAcitivitiesDayAfterTomorrow = props.dayActivities.filter(activity =>
        (activity.possibleWhenRaining || !isRainingDayAfterTomorrow()) &&
        (activity.possibleWhenWarm || !isWarmDayAfterTomorrow()) &&
        (activity.possibleWhenMiddle || !isMiddleDayAfterTomorrow()) &&
        (activity.possibleWhenCold || !isColdDayAfterTomorrow())
    );


    return props.weather === undefined ? <div>loading...</div> : (
        <div className={"flex-container"}>
            <div className={"currentDay"}>
                {props.dayActivities.length === 0 ? <p>loading...</p> : (
                    <div>
                        {/*<h2>{getCurrentDate()}</h2>*/}
                        <h2>Heute</h2>
                        <div className={"activityBox"}>
                            {filterAcitivitiesToday.map(daily =>
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
                            {filterAcitivitiesTomorrow.map(daily =>
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
                            {filterAcitivitiesDayAfterTomorrow.map(daily =>
                                <ActivityCard key={daily.id} dayActivity={daily} />
                            )}
                        </div>
                    </div>
                ) : <p>keine Daten verfügbar</p>}
            </div>
        </div>
    );
}
