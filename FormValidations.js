import React, { useState } from "react";

function FormValidations()
{
    const [userId,setUserId] = useState("");
    const [Password,setPassword] = useState("");
    const [userErr , setUserErr] = useState(false);
    const [passErr,setPassErr] = useState(false);
    
    function loginHandle(e)
    {
        if(userId.length < 3  || Password < 3)
        {
            alert("enter correct value");
        }
        else
        {
            alert("all good : )");
        }
        // alert("hello")
        e.preventDefault()
    }

    function userHandler(e)
    {
        let item = e.target.value;
        if(item.length < 3)
        {
           // console.warn("maximum length");
           setUserErr(true);
        }
        else{
            //console.log("okay");
            setUserErr(false)           
        }
        setUserId(item)
        // console.warn(e.target.value.length)
    }

    function passwordHandler(e){
        {
            let item = e.target.value;
            if(item.length < 3)
            {
               // console.warn("maximum length");
               setPassErr(true);
            }
            else{
                //console.log("okay");
                setPassErr(false)
                
            }
            // console.warn(e.target.value.length)
            setPassword(item)
        }
    }
    return (
        <div>
            <h1>**Validations**</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler}/>{userErr?<span>User Not Valid</span>:""}
            <br/><br/>

            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/> {passErr?<span>Password is not valid</span>:""}
            <br/> <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default FormValidations;