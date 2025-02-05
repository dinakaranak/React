
import './App.css';
import Task01 from './Task1/Task01';
import Task03 from './Task1/Task03';
import Task04 from './Task1/Task04';
import Task05 from './Task1/Task05';
import Task06 from './Task1/Task06';
import Task08 from './Task1/Task08';
import Task09 from './Task1/Task09';
import ParentEmp from './Tasks/ParentEmp';
import Basic from './Training/Basic';
import PropsParent from './Training/PropsParent';
import UseStateHook from './Training/useStateHook';


function App() {
  //features in react js; virtual dom, component based library, babel(transpiler), one way data flow, JSX(javascript embedded with html)


  return (
    <div className="App">
      {/* <Basic></Basic>
      <PropsParent />
      <ParentEmp /> */}
      
    {/* <UseStateHook /> */}
    <Task01 />
    <Task03 />
    <Task04 />
    <Task05 />
    <Task06 />
    <Task08 />
    <Task09 />
    </div>
   
  );
}

export default App;
