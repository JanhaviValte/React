import React, { Component } from "react";

class ReactClassStates extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data:"January",
            // data:9
        }
    }

    month()
    {
        // alert("month")
        this.setState({data:"2025"})
        // this.setState({data:this.state.data+10})
    }

    render()
    {
        return (
            <div className="App">                
                    <h1>{this.state.data}</h1>
                    <button onClick={()=>this.month()}>Update Month</button>
            </div>
        );
    }
}

export default ReactClassStates;