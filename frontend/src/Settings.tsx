import AddActivity from "./Menubar/AddActivity.tsx";
import {Box, Grid, TextField} from "@mui/material";

export default function Settings() {
    return <>
        <Grid container={true}
              justifyContent={'center'}
              marginBottom={'2%'}
        >
            <Box position={'absolute'}
                 width={'400px'}
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
                <AddActivity/>
                <TextField color={"warning"} size={"small"} placeholder={"Berlin"}
                           InputProps={{style: {background: 'white'}}}></TextField>
            </Grid>
        </Grid>
    </>
}