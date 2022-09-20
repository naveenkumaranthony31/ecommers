import React from 'react'
import { useNavigate } from "react-router-dom";
function Login(){
    let navigate=useNavigate()
    let username="abc"
    let passwoard="1233"
    let login=()=>{
        if(username=="abc" && passwoard=="1233"){
        navigate("/portal/Dashboard")
    }else{
        alert("wrong credential")
    }
    }
    return(
    <div>
        <h1>login</h1>
    <button onClick={login}>LOGIN</button>
    </div>
    )
}
export default Login;