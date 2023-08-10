import WeatherApi from "./WeatherAPI.tsx";
import AddActivity from "./AddActivity.tsx";

const styles = {
    menubar:{
        display:"flex"
    }
};
export default function MenuBar(){
    return <div style={styles.menubar}>
        <WeatherApi></WeatherApi>
        <AddActivity></AddActivity>
    </div>
}