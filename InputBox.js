import React, { useState } from "react";
function InputBox()
{
    const [data,setData] = useState(null)
    const [print,setPrint] = useState(null)
    function getData(val)
    {
        console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
    return(
        <div className="App">
            <h1>***Get Input Box Value Section***</h1>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}>PrintData</button>
            
        </div>
    )
}
export default InputBox;