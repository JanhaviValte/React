import { useState } from "react";
import React from "react";

function ReactFunctionalStates() {
    // let data = "react";

    // function updateData()
    // {
    //     data = "tutorial";
    //     alert(data);
    // }
    // console.warn("-------------------")

    const [data, setData] = useState("Anil");
    const [add, setAdd] = useState(0);

    function updateData() {
        setData("Siddhu");
    }
    console.warn("testing");

    function addData() {
        setAdd(add + 1)
    }
    console.log("working");

    return (
        <div className="App">
            <div>
                {/* <h1>States in React</h1> */}
                <h1>{data}</h1>
                
                {/* <button onClick={updateData}>Update Data</button> */}

                <button onClick={updateData}>Update Data</button>
            </div>

            <div>
                <h1>{add}</h1>
                <button onClick={addData}>Add Data</button>
            </div>
        </div>
   );
}

export default ReactFunctionalStates;