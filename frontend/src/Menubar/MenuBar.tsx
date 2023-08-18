import WeatherApi from "./WeatherAPI.tsx";
import {Grid, Typography} from '@mui/material';
import LogoutButton from "./LogoutButton.tsx";

export default function MenuBar() {
    return <Grid container
                 direction="row"
                 justifyContent="space-around"
                 alignItems="center"
                 gap={2}
                 bgcolor={"#3866B2FF"}>
        <Typography
            variant={"h4"}
            color={"white"}
        fontFamily={"Copperplate, Papyrus, fantasy"}>To Be Able
        </Typography>
        <WeatherApi/>
        <LogoutButton/>
    </Grid>
}