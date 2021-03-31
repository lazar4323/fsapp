import React,{useEffect} from "react"
import Authservice from "../../services/authentication-service"
import {useHistory} from "react-router-dom"
import { removeUser, setUser } from "../login/store/actions"
import {useDispatch,useSelector} from "react-redux"

function Home(){

    const dispatch = useDispatch();
    const userStore = useSelector(store => store.userStore)
    const history = useHistory()


    useEffect(()=>{
        if(Authservice.getUserData() === null){
            history.push('/');
        }if(userStore){
            dispatch(setUser(Authservice.getUserData()))
        }
    },[])

    const onLogout = ()=> {
        Authservice.logout(history)
        dispatch(removeUser())
    }

    return(
        <div className="container">
            <h1>Home</h1>
            <h2>{userStore.name}</h2>
            <button className="btn btn-warning" onClick={onLogout}>Logout</button>
        </div>

    )
}

export default Home;