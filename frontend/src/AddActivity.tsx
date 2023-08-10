import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from "react";
import {
    Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    FormGroup, FormControlLabel, FormLabel, Checkbox, TextField, Alert
} from '@mui/material';

export default function AddActivity() {

    const [possibleWhenWarm, setPossibleWhenWarm] = useState(false)
    const [possibleWhenMiddle, setPossibleWhenMiddle] = useState(false)
    const [possibleWhenCold, setPossibleWhenCold] = useState(false)
    const [possibleWhenRaining, setPossibleWhenRaining] = useState(false)
    const [possibleWithChildren, setPossibleWithChildren] = useState(false)
    const [insideActivity, setInsideActivity] = useState(false)
    const [outsideActivity, setOutsideActivity] = useState(false)
    const [activityName, setActivityName] = useState("Name der Aktivität")
    const [open, setOpen] = useState(false)

    function updatePossibleWhenWarm() {
        setPossibleWhenWarm(!possibleWhenWarm)
    }

    function updatePossibleWhenMiddle() {
        setPossibleWhenMiddle(!possibleWhenMiddle);
    }

    function updatePossibleWhenCold() {
        setPossibleWhenCold(!possibleWhenCold)
    }

    function updatePossibleWhenRaining() {
        setPossibleWhenRaining(!possibleWhenRaining)
    }

    function updatePossibleWithChildren() {
        setPossibleWithChildren(!possibleWithChildren)
    }

    function updateInsideActivity() {
        setInsideActivity(!insideActivity)
    }

    function updateOutsideActivity() {
        setOutsideActivity(!outsideActivity)
    }

    function resetAllFields(){
        setActivityName("Name der Aktivität");
        setOutsideActivity(false);
        setInsideActivity(false);
        setPossibleWithChildren(false);
        setPossibleWhenRaining(false);
        setPossibleWhenCold(false);
        setPossibleWhenMiddle(false);
        setPossibleWhenWarm(false);
    }
    function Submit() {
        setOpen(false);
        axios({
            method: 'post',
            url: '/api',
            data: {
                activityName,
                possibleWhenWarm,
                possibleWhenMiddle,
                possibleWhenCold,
                possibleWhenRaining,
                possibleWithChildren,
                insideActivity,
                outsideActivity
            }
        }).then(() => resetAllFields()).then(/*popup*/)

    }


    return <>

        <Button size={"small"} variant={'outlined'} onClick={() => setOpen(true)}>Aktivität hinzufügen</Button>
        <Dialog open={open}
                onClose={() => setOpen(false)}
                aria-labelledby={'dialog-title'}
                aria-describedby={'dialog-description'}>
            <DialogTitle sx={{textAlign: 'center'}} id={'dialog-title'}>Aktivität hinzufügen</DialogTitle>
            <DialogContent>
                <DialogContentText id={'dialog-description'}>
                    <FormGroup>
                        <TextField id="outlined-basic" label={activityName} variant="outlined"
                                   onChange={e => setActivityName(e.target.value)}/>
                        <br/>
                        <FormLabel>Bei welchen Wettersituationen ist die Aktivität möglich ?</FormLabel>

                        <FormControlLabel control={<Checkbox/>} label="Warm (25°C)"
                                          checked={possibleWhenWarm}
                                          onChange={updatePossibleWhenWarm}/>

                        <FormControlLabel control={<Checkbox/>} label="Mittel (15°C - 25°C)"
                                          checked={possibleWhenMiddle}
                                          onChange={() => updatePossibleWhenMiddle()}/>

                        <FormControlLabel control={<Checkbox/>} label="Kalt (<10 °C)"
                                          checked={possibleWhenCold}
                                          onChange={() => updatePossibleWhenCold()}/>

                        <FormControlLabel control={<Checkbox/>} label="Regen"
                                          checked={possibleWhenRaining}
                                          onChange={() => updatePossibleWhenRaining()}/>
                        <br/>
                        <FormLabel>Wo und mit wem ist die Aktivität möglich ?</FormLabel>

                        <FormControlLabel control={<Checkbox/>} label="drinnen"
                                          checked={insideActivity}
                                          onChange={() => updateInsideActivity()}/>

                        <FormControlLabel control={<Checkbox/>} label="draußen"
                                          checked={outsideActivity}
                                          onChange={() => updateOutsideActivity()}/>

                        <FormControlLabel control={<Checkbox/>} label="mit Kindern"
                                          checked={possibleWithChildren}
                                          onChange={() => updatePossibleWithChildren()}/>
                    </FormGroup>
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{ justifyContent: "space-between" }}>
                    <Button size={'large'}
                            onClick={() => {resetAllFields(); setOpen(false)}}
                            color={'error'}>Abbrechen
                    </Button>
                    <Button
                        size={'large'}
                        onClick={() => {Submit()}}>Speichern
                    </Button>
            </DialogActions>
        </Dialog>


        <Popup trigger={<button> addAktivity</button>} position="bottom center">
            <form className={"popupContainer"}>
                <div className={"popupItemText"}>
                    <label>Name der Aktivität</label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input className={"inputField"} type={"text"} value={activityName}
                           onChange={e => setActivityName(e.target.value)}/>
                </div>

                <div className={"popupItemText"}>
                    <label>möglich wenn es warm ist ? </label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updatePossibleWhenWarm} checked={possibleWhenWarm} type={"checkbox"} id={"isWarm"}/>
                </div>

                <div className={"popupItemText"}>
                    <label>möglich wenn es mittelwarm ist ? </label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updatePossibleWhenMiddle} checked={possibleWhenMiddle} type={"checkbox"}
                           id={"isMiddleWarm"}/>
                </div>

                <div className={"popupItemText"}>
                    <label>möglich wenn es kalt ist ?</label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updatePossibleWhenCold} checked={possibleWhenCold} type={"checkbox"} id={"isCold"}/>
                </div>

                <div className={"popupItemText"}>
                    <label>kinder</label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updatePossibleWithChildren} checked={possibleWithChildren} type={"checkbox"}
                           id={"withChildren"}/>
                </div>

                <div className={"popupItemText"}>
                    <label>regen</label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updatePossibleWhenRaining} checked={possibleWhenRaining} type={"checkbox"}
                           id={"whenRaining"}/>
                </div>

                <div className={"popupItemText"}>
                    <label>drinnen</label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updateInsideActivity} checked={insideActivity} type={"checkbox"} id={"inside"}/>
                </div>

                <div className={"popupItemText"}>
                    <label>draußen</label>
                </div>
                <div className={"popupItemCheckbox"}>
                    <input onClick={updateOutsideActivity} checked={outsideActivity} type={"checkbox"} id={"outside"}/>
                </div>

                <button type={"button"} onClick={() => {Submit()}}>CLICK ME</button>
            </form>
        </Popup>
    </>
}