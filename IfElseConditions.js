import React, { useState } from "react";

function IfElseConditions() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>


            <div>
                {/* If condition in react                                 else condition in react */}
                {loggedIn ? <h1>*If-Else And Else-If Conditions*</h1> : <h1>**Learning Conditions in React...</h1>}
            </div>


            {/* elseIf condition */}
            <div>
                {
                    loggedIn == 1 ? <h1>*If-Else And Else-If Conditions*</h1>
                        : loggedIn == 2 ? <h1>**Learning Conditions in React...</h1>
                            : <h1>Welcome</h1>
                }
            </div>
        </div>
    )

    // if(loggedIn)
    // {
    //     return (
    //         <div>
    //             <h1>
    //                 ***If-Else And Else-If Conditions***
    //             </h1>
    //         </div>
    //     )
    // }
    // else
    // {
    //     return (
    //         <div>
    //             <h1>
    //                 **Learning Conditions in React...
    //             </h1>
    //         </div>
    //     )
    // }

}

export default IfElseConditions;