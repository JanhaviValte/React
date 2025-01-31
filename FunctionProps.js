import React from "react";
import FunctionAsProps from "./FunctionAsProps";

function FunctionProps(props)
{
    return (
        <div>
            <FunctionAsProps/>
            <h1>
                User Component
            </h1>
            <button onClick={props.data}>Call Data Function</button>
        </div>
    )
}
export default FunctionProps;