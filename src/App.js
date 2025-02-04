
import './App.css';
import Celsius from './Task2/Celsius';
import ParentEmp from './Tasks/ParentEmp';
import Basic from './Training/Basic';
import PropsParent from './Training/PropsParent';


function App() {
  //features in react js; virtual dom, component based library, babel(transpiler), one way data flow, JSX(javascript embedded with html)


  return (
    <div className="App">
      <Basic></Basic>
      <PropsParent />
      <ParentEmp />
      <Celsius />
    

      
    </div>
   
  );
}

export default App;
