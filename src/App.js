
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
import UseLocationHook from './Training/UseLocationHook';
import UseParamsHook from './Training/UseParamsHook';
import FormModel from './Task1/FormModel';
import Out from './Task1/Out';

import FormEvents from './Training/FormEvents';
import SignIn from './Task1/SignIn';
import MouseEvents from './Training/MouseEvents';
import MouseTask from './Task1/MouseTask';
import StonePaper from './Task1/StonePaper';
import CelToFah from './Task1/CelToFah';
import RandomChange from './Task1/RandomChange';
import DialogueBoxes from './Training/DialogueBoxes';
import Storages from './Training/Storages';
import FormCredentials from './Task1/FormCredentials';

import { useState } from 'react';
import Signup from './Task1/Signup';
import Login from './Task1/Login';
import ValidationUsingYup from './Training/ValidationUsingYup';
import UseEffectHook from './Training/UseEffectHook';
import Timer from './Task1/Timer';

import StopWatch from './Task1/StopWatch';
import UseEffectWithAPI from './Training/UseEffectWithAPI';
import APIWithCard from './Task1/APIWithCard';




function App() {
  //features in react js; virtual dom, component based library, babel(transpiler), one way data flow, JSX(javascript embedded with html)
  const [page, setPage] = useState("signup");

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
    {/* <FormModel /> */}
    <BrowserRouter>
        <Routes>
         <Route  path='/t'  element={<Routing />}></Route>
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
          <Route path='/useLocationHook' element={<UseLocationHook />}></Route>
          <Route path='/UseParamsHook/:id' element={<UseParamsHook />}></Route> 
          <Route path='/f' element={<FormModel />}></Route>
          <Route path='/Out' element={<Out />}></Route>
          <Route path='/formevents' element={<FormEvents />}></Route>
          <Route path='/sigin' element={<SignIn />}></Route>
          <Route path='/MouseEvents' element={<MouseEvents />}></Route>
          <Route path='/MouseTask' element={<MouseTask />}></Route>
          <Route path='/StonePaper' element={<StonePaper />}></Route>
          <Route path='/CelToFah' element={<CelToFah />}></Route>
          <Route path='/RandomChange' element={<RandomChange />}></Route>
          <Route path='/DialogueBoxes' element={<DialogueBoxes />}></Route>
          <Route path='/Storages' element={<Storages />}></Route>
          <Route path='/FormCredentials' element={<FormCredentials />}></Route>
          <Route path='/ValidationUsingYup' element={<ValidationUsingYup />}></Route>
          <Route path='/UseEffectHook' element={<UseEffectHook />}></Route>
          <Route path='/Timer' element={<Timer />}></Route>
          <Route path='/StopWatch' element={<StopWatch />}></Route>
          <Route path='/UseEffectWithAPI' element={<UseEffectWithAPI />}></Route>
          <Route path='/APIWithCard' element={<APIWithCard />}></Route>
          
        
          
        </Routes>
    </BrowserRouter>
    {/* <div style={{ textAlign: "center", padding: "20px" }}>
      {page === "signup" ? <Signup switchToLogin={() => setPage("login")} /> : <Login switchToSignup={() => setPage("signup")} />}
    </div> */}
    </div>
   
  );
}

export default App;

//npm i react-router-dom
