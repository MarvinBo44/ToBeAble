// import {TextField} from "@mui/material";


// import {useState} from "react";
import {Box, Button, FormGroup, Grid, TextField} from "@mui/material";
import {useState} from "react";

export default function SearchCity(props) {

    // Local state to hold the current value of the input
    const [inputValue, setInputValue] = useState('');

    // Handler function for the TextField's onChange event
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handler function for the button's onClick event
    const handleClick = () => {
        props.setCity(inputValue);
    };

    return (
        <Grid container={true}
        flexDirection={'row'}>
            <TextField
                id="outlined-basic"
                label={"Name der Stadt"}
                variant="outlined"
                value={inputValue}
                size={'small'}
                InputProps={{style: {background: 'white'}}}
                onChange={handleInputChange}
            /><Button
            onClick={handleClick}
            variant={"contained"}
            color={'info'}
        >ok</Button>
        </Grid>
    );
}