import './App.css'
import './DayView.css'
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage.tsx";
import RegisterPage from "./Register/Register.tsx";
import HomePage from "./HomePage.tsx";

function App() {

    return (
        // <>
        //     <div>
        //         <WeatherData weather={weather}/>
        //         <AddActivity/>
        //         <CurrentDay weather={weather}/>
        //
        //     </div>
        // </>

        <Routes>
            <Route path={"/"} element={<LoginPage/>}/>
            <Route path={"/register"} element={<RegisterPage/>}/>
            <Route path={"/home"} element={<HomePage/>}/>
        </Routes>
    )
}

export default App

