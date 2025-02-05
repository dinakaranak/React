import React, { useState } from 'react'

function Task05() {
    let [dobInput, setDobInput] = useState()
    let [age, setAge] = useState()
    function calculateAge() {
        if (!dobInput) {
            alert("Please enter your date of birth!");
            return;
        }
        let dob = new Date(dobInput);
        let today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        let dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        setAge(`Your Age is ${age}`)
    }

    return (
        <div>
            <div>
                <h1>AGE CALCULATOR</h1>
                <input type="date" placeholder='Enter Your Date of Birth' onChange={(event) => { setDobInput(event.target.value) }} /><br />
                <button onClick={calculateAge}>Calculate Age</button>
                <p>{age}</p>
            </div>
        </div>
    )
}

export default Task05