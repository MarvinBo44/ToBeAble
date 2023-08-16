import WeatherApi from "./WeatherAPI.tsx";
import AddActivity from "./AddActivity.tsx";
import {Box} from '@mui/material';

const styles = {
    menubar: {
        display: "flex"
    }
};

export default function MenuBar() {
    return <Box>
        <Box style={styles.menubar}>
            <WeatherApi></WeatherApi>
            <AddActivity></AddActivity>
        </Box>
    </Box>
}