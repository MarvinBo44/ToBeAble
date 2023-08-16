import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

type Props = {
    setUser: (user:string) => void
}

export default function LoginPage(loginPageProps:Props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate()

    function onChangeHandlerUsername(event:ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }

    function onChnageHandlerPassword(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function login(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/user/login", undefined, {auth: {username, password}})
            .then((response) => loginPageProps.setUser(response.data))
            .then(() => nav("/home"))
            .catch((error) => console.log(error));
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={login}>
                <input type={"text"} id={"username"} placeholder={"enter your username"} required={true} onChange={onChangeHandlerUsername}/>
                <input type={"password"} id={"password"} placeholder={"*****************"} required={true} onChange={onChnageHandlerPassword}/>
                <button >Login</button>
            </form>
            <button><Link to={"/register"}>New here?</Link></button>
        </div>
    );
}