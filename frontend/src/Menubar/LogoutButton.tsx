import {useNavigate} from "react-router-dom";
import {FormEvent} from "react";
import axios from "axios";


export default function LogoutButton() {
    const nav = useNavigate();
    function logout(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        axios.post("/api/user/logout")
            .then((response) => console.log(response.data))
            .then(()=>nav("/"))
            .catch((error) => console.log(error))
    }

    return(
        <form onSubmit={logout}>
            <button>logout</button>
        </form>
    );
}