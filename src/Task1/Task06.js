import React, { useState } from 'react'

function Task06() {
    let [multi, setMulti] = useState("")
    let [tab, setTab] = useState([])
    function multiTable() {
            let arr=[]
        for (let table = 1; table <= 10; table++) {
           let result = table * Number(multi);
            arr.push(`${table}X${multi}=${result}`)
        }
        setTab(arr)
    }
    return (
        <div>
            <input type='text' placeholder='Table' onChange={(event) => { setMulti(event.target.value) }} />
            <button onClick={multiTable}>Click</button>
          <p>
            {tab.map((table,index)=>(<p key={index}>{table}</p>))}
          </p>
        </div>
    
    )
}

export default Task06

// list of even nos
// list of prime nos
