import React from 'react'
import Swal from 'sweetalert2'

function DialogueBoxes() {  // popup boxes

    function DataSave(){
Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
     icon: "success"
  });
}


  return (
    <div>DialogueBoxes
        <button onClick={() => alert("you clicked this button")} >alert</button>
        <button onClick={() => window.confirm("Are you sure?")} >confirm</button>
        <button onClick={() => prompt("you clicked this button")} >prompt</button>
        
        <button onClick={DataSave}>save</button>
        {/* <button onClick={DataSave}>save</button> */}
    </div>
  )
}

export default DialogueBoxes
//npm install sweetalert2