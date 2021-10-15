import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Another from './components/Another';
import Button from './components/Button';
import ClassHello from './components/ClassHello';

import { useState } from 'react';

function App() {
  //let acceptedText = "initial value"

  const [acceptedText, setAcceptedState] = useState("initial value");

  let styleExample = {
    font50: {
      color: "blue",
      fontSize: '50px',
      backgroundColor: "yellow"
    }
  }

  const btnHandler = (event) => {
    console.log("you have clicked button")
  }

  const textHandler = (event) => {
    //acceptedText = event.target.value;
    setAcceptedState(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
      <div>Accepted is {acceptedText}</div>
        <Another />
        <ClassHello />
        <div style={styleExample.font50}>This is style from object</div>
        <div><button onClick={btnHandler}>Click me</button></div>
        <div><input type="text" onKeyUp={textHandler} /></div>
      </header>
    </div>
  );
}

export default App;
