import React, { useState } from 'react'

function Task04() {
    let [loan, setLoan] = useState()
    let [annual, setAnnual] = useState()
    let [month, setMonth] = useState()
    let [calc, setCalc] = useState()
    function calculateEmi() {

        if (loan === "" || annual === "" || month === "") {
            alert("Please enter all values");
            return;
        }

        let r = (annual / 100) / 12;
        let emi = (loan * r * Math.pow(1 + r, month)) / (Math.pow(1 + r, month) - 1);
        emi = emi.toFixed(2);
        setCalc(`Your Monthly EMI: ${emi}`)
    }
    return (
        <div>

            <div>
                <h1>EMI CALCULATOR</h1>
                <input type="text" placeholder="Loan Amount (₹)" onChange={(event) => { setLoan(event.target.value) }} /><br />
                <input type="text" placeholder="Annual Interest Rate (%)" onChange={(event) => { setAnnual(event.target.value) }} /><br />
                <input type="text" placeholder="Loan Tenure (Months)" onChange={(event) => { setMonth(event.target.value) }} /><br />
                <button onClick={calculateEmi}>Calculate EMI</button>
                <p>{calc}</p>

            </div>
        </div>
    )
}

export default Task04