
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Task01 from './Task1/Task01';
import Task03 from './Task1/Task03';
import Task04 from './Task1/Task04';
import Task05 from './Task1/Task05';
import Task06 from './Task1/Task06';
import Task08 from './Task1/Task08';
import Task09 from './Task1/Task09';
import Task10 from './Task1/Task10';
import Task11 from './Task1/Task11';
import Task12 from './Task1/Task12';
import ParentEmp from './Tasks/ParentEmp';
import Basic from './Training/Basic';
import PropsParent from './Training/PropsParent';
import UseStateHook from './Training/useStateHook';
import Routing from './Training/Routing';


function App() {
  //features in react js; virtual dom, component based library, babel(transpiler), one way data flow, JSX(javascript embedded with html)


  return (
    <div className="App">
      {/* <Basic></Basic>
      <PropsParent />
      <ParentEmp />
      
    <UseStateHook />
    <Task01 />
    <Task03 />
    <Task04 />
    <Task05 />
    <Task06 />
    <Task08 />
    <Task09 />
    <Task10 />
    <Task11 />
    <Task12 /> */}
    <BrowserRouter>
        <Routes>
          <Route  path='/'  element={<Routing />}></Route>
          <Route  path='/task1'  element={<Task01 />}></Route>
          <Route  path='/task3'  element={<Task03 />}></Route>
          <Route  path='/task4'  element={<Task04 />}></Route>
          <Route  path='/task5'  element={<Task05 />}></Route>
          <Route  path='/task6'  element={<Task06 />}></Route>
          <Route  path='/task8'  element={<Task08 />}></Route>
          <Route  path='/task9'  element={<Task09 />}></Route>
          <Route  path='/task10'  element={<Task10 />}></Route>
          <Route  path='/task11'  element={<Task11 />}></Route>
          <Route  path='/task12'  element={<Task12 />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;

//npm i react-router-dom
