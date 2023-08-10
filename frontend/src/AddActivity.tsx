import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Typography, Button} from '@mui/material';
import {useState} from "react";

export default function AddActivity() {

    const [possibleWhenWarm, setPossibleWhenWarm] = useState(false)
    const [possibleWhenMiddle, setPossibleWhenMiddle] = useState(false)
    const [possibleWhenCold, setPossibleWhenCold] = useState(false)
    const [possibleWhenRaining, setPossibleWhenRaining] = useState(false)
    const [possibleWithChildren, setPossibleWithChildren] = useState(false)
    const [insideActivity, setInsideActivity] = useState(false)
    const [outsideActivity, setOutsideActivity] = useState(false)
    const [activityName, setActivityName] = useState("")

    function updatePossibleWhenWarm() {
        setPossibleWhenWarm(!possibleWhenWarm)
    }

    function updatePossibleWhenMiddle() {
        setPossibleWhenMiddle(!possibleWhenMiddle)
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

    function addActivity() {
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
        })
    }



    return <div>



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

                <button type={"button"} onClick={() => {
                    addActivity()
                }}
                >CLICK ME
                </button>

            </form>
        </Popup>
    </div>

}