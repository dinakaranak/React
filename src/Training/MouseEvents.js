import React from 'react'

function MouseEvents() {

    function handleMouseOver(){
        console.log('Mouse Entered');
        
    }

    function handleMouseOut(){
        console.log("Mouse left");
        
    }
function handleKeys(e){
  console.log(e.key);
  if(e.key=='Shift'){
    console.log("shift pressed");
    
  }
  
}
  return (
    <div onMouseDown={handleMouseOver} onMouseUp={handleMouseOut}>MouseEvents
         Line 7:8:   'Task05' is defined but never used           no-unused-vars
  Line 8:8:   'Task06' is defined but never used           no-unused-vars
  Line 9:8:   'Task08' is defined but never used           no-unused-vars
  Line 10:8:  'Task09' is defined but never used           no-unused-vars
  Line 11:8:  'Task10' is defined but never used           no-unused-vars
  Line 12:8:  'Task11' is defined but never used           no-unused-vars
  Line 13:8:  'Task12' is defined but never used           no-unused-vars
  Line 14:8:  'ParentEmp' is defined but never used        no-unused-vars
  Line 15:8:  'Basic' is defined but never used            no-unused-vars
  Line 16:8:  'PropsParent' is defined but never used      no-unused-vars
  Line 17:8:  'UseStateHook' is defined but never used     no-unused-vars
  Line 18:8:  'Routing' is defined but never used          no-unused-vars
  Line 19:8:  'UseLocationHook' is defined but never used  no-unused-vars
  Line 20:8:  'UseParamsHook' is defined but never used    no-unused-vars

webpack compiled with 1 warning

<button >click</button>
<input  onKeyDown={handleKeys}></input>
    </div>
  )
}

export default MouseEvents

// chnage the background color while mouse over and out
// tooltip