import React, { useState } from "react";

function HideShowToggle() {
    const [status, setStatus] = useState(true)
    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <h1>***This Is Hide,Show And Toggle Section***</h1>
            <div>
                {
                    status ? <h2>Hello World</h2> : null
                }
                <button onClick={() => setStatus(false)}>Hide Button</button>
                <button onClick={() => setStatus(true)}>Show Button</button>
            </div>
            <div>
                {
                    toggle ? <h2>Toggle Testing</h2> : null
                }
                <button onClick={() => setToggle(!toggle)}>Toggle Button</button>
            </div>
        </div>
    );
}

export default HideShowToggle;