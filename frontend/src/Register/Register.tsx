import {ChangeEvent, FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate();

    function onChangeHandlerUsername(event:ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }

    function onChnageHandlerPassword(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function registrieren(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/user/register", {username, password})
            .then(() => nav("/home"))
            .catch((error) => console.log(error));

    }

    return(
        <div>
            <h1>Registrieren</h1>
            <form onSubmit={registrieren}>
                <input type={"text"} id={"username"} placeholder={"enter your username"} required={true} onChange={onChangeHandlerUsername}/>
                <input type={"password"} id={"password"} placeholder={"*****************"} required={true} onChange={onChnageHandlerPassword}/>
                <button>Jetzt registrieren</button>
            </form>
            <button><Link to={"/"}>I have an login</Link></button>
        </div>
    );
}