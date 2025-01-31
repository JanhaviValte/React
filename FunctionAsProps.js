import React from "react";
import FunctionProps from "./FunctionProps";
import FunPropsMembers from "./FunPropsMembers";

function FunctionAsProps()
{
    function getData()
    {
        alert("functions as props");
    }
    
    return (
        <div>
            <FunctionProps data = {getData}/>
            <div>
                <FunPropsMembers data = {getData}/>
            </div>
            {/* <h1>
                **Passing Functions As Props**
            </h1> */}
        </div>
    )
}

export default FunctionAsProps;