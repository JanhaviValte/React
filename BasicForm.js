import React, { use, useState } from "react";

function BasicForm() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function getFormData(e) {
        console.warn(name, tnc, interest);
        e.preventDefault()
        console.warn("Submitted Data:",{name,tnc,interest});
        resetForm();
        // setName("");
        // setTnc(false);
        // setInterest("");
    }

    function resetForm() {
        setName("");
        setTnc(false);
        setInterest("");
    }
    return (
        <div>
            <h1>
                ***React Form Section***
            </h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Nashik</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                </select>
                <br /> <br />
                <input type="checkbox" checked={tnc} onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms And Conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
                <button onClick={resetForm}>Cancel</button>
            </form>
        </div>
    )
}

export default BasicForm;