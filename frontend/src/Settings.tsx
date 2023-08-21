import AddActivity from "./Menubar/AddActivity.tsx";
import {Box, Grid, TextField} from "@mui/material";
import SearchCity from "./SearchCity.tsx";

export default function Settings(props) {
    return <>
        <Grid container={true}
              justifyContent={'center'}
              marginBottom={'2%'}
        >
            <Box position={'absolute'}
                 width={'800px'}
                 sx={{
                     borderTop: 65, borderTopColor: "#3866B2FF",
                     borderLeft: 100, borderLeftColor: 'transparent',
                     borderRight: 100, borderRightColor: 'transparent'
                 }}></Box>
            <Grid container={true}
                  p={'10px'}
                  width={'fit-content'}
                  gap={'20px'}
                  wrap={'wrap'}
            >
                <AddActivity setDayActivity={props.setDayActivity}/>
                <SearchCity setCity={props.setCity}/>
            </Grid>
        </Grid>
    </>
}