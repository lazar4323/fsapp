import React from "react";
import {useState} from "react";
import Authservice from "../../services/authentication-service";
import { setUser } from "./store/actions";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"


function Login(){

    const [state,setState] = useState({username : "",password: ""})
    const dispatch = useDispatch();
    const history = useHistory()


    const onLogin = () =>{
        Authservice.login(state)
        .then(res =>{
            Authservice.storeUserData(res.data);
            dispatch(setUser(res.data));
            history.push('/home');
        })
    }

    

    return(
        <div className="container">
        <h1>Login</h1>
        <div className="col-6 offset-3">
            <input  type="text" placeholder="Name" className="form-control"
            onChange={event => setState({...state,username : event.target.value})}
            /><br/>
            <input type="password" placeholder="password" className="form-control"
            onChange={event => setState({...state,password : event.target.value})}
            /><br/>
            <button onClick={onLogin} className="btn btn-info">Login</button>
        </div>

    </div>
    )
}

export default Login;