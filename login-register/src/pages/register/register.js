import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom"
import Authservice from "../../services/authentication-service"

function Register(){

    const [state,setState] = useState({name : "",pass : ""})

    const history = useHistory();

    const onRegister = function(){
        Authservice.register(state  )
        .then(res =>{
            if(res.data === "okej"){
                history.push('/')
            }else{
                history.push('/register')
            }
        })
    }

    return(
        <div className="container">
            <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="Name" value={state.name} className="form-control"
                onChange={event => setState({...state,name : event.target.value})}
                /><br/>
                <input type="password" placeholder="password" className="form-control"
                onChange={event => setState({...state,pass : event.target.value})}
                /><br/>
                <button onClick={onRegister} className="btn btn-primary">Register</button>
            </div>

        </div>

    )
}

export default Register;