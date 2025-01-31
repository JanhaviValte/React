import React from "react"

function Student(props)
{
    console.log(props.name);

    return (
        <div className="App" style={{backgroundColor:"skyblue", margin:20}}>
            <h1>
                Student {props.name} 
            </h1>
            <h2>
                email:{props.email}
            </h2>
            {props.other && (
                <h3> Address - {props.other.address}, Mobile - {props.other.mobile}</h3>
            )}
        </div>
    )
}

export default Student;