// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import UsersFunctional from './UsersFunctional';
import UsersClass from './UsersClass';
import UsersJSX from './UsersJSX'
import ReactFunctionalStates from './ReactFunctionalStates'
import ReactClassStates from './ReactClassStates';
import Student from './Student';
import InputBox from './InputBox';
import HideShowToggle from './HideShowToggle';

function App() {
  const [name,setName] = useState("Suman")
  let data="React Tutorial"

  function Button()
  {
    alert("function called");
  }
  return (
    <div className="App">

        <h1>Jay Ganesh!!!</h1>
        <h2>JSX</h2>
        <h3>{data}</h3>
        <h1>Props in React</h1>
        <button onClick={Button}>Click Here</button>
        {/* <button onClick={()=>alert("Hello")}>Click Here</button> */}
        <UsersFunctional/>
        <UsersClass/>
        <UsersJSX/>
        <ReactFunctionalStates/>
        <ReactClassStates/>
        {/* <Student name={"january"} email={"prabha@gmail.com"} other={{ address: "pune", mobile: "9191817181" }} />
            <Student name={"february"} email={"swara@gmail.com"} other={{ address: "nashik", mobile: "1232123212" }} />
            <Student name={"march"} email={"shirish@gmail.com"} /> */}
        <Student name={name}/>
        <button onClick={()=>{setName("Bapat")}}>Update Name</button>

        <InputBox/>
        <HideShowToggle/>
       
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "Jay Ganesh!!!"
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          REACT
        </a>
      </header> */}
    </div>
  );
}


export default App;
