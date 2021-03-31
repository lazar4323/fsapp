import React from "react";
//da bismo poslali neki zahtev ka serveru treba da koristimo useEffect
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import { BrowserRouter,Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import store from "./store"
import {Provider} from "react-redux"
import Home from "./pages/home/home";



function App(){



    return(
    <Provider store = {store}>
       <BrowserRouter>
        <div>
            <Navbar />
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/home" component={Home}/>
       </div>
       </BrowserRouter> 
    </Provider>
    )
}

export default App;