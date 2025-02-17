import React, { useState } from 'react'
import './Common.css'

function MouseTask() {
   const [bgColor, setBgColor]=useState("white")
   const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div>
        <div 
        style={{
        backgroundColor: bgColor,
        padding: "40px",
        textAlign: "center", }}
      onMouseEnter={() => setBgColor("lightyellow")}
      onMouseLeave={() => setBgColor("white")} >  Change color </div>
       <div>
      <button  onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}>
        Click Me
      </button>

      {showTooltip && (
        <div>
          Click Me!
        </div>)}
    </div>
    </div>
  )
}

export default MouseTask

//stone paper 
//celsius
//using random num change 