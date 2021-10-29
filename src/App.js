import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Another from './components/Another';
import Button from './components/Button';
import ClassHello from './components/ClassHello';

import { useState } from 'react';
import Notification from './tutorial-components/Notification';

function App() {
  //let acceptedText = "initial value"

  let topics = [
    "html", 'css', 'js', 'tags', 'elements', 'attributes', 'functions'
  ]

  const [acceptedText, setAcceptedState] = useState("initial value");
  const [acceptedNumber, setAcceptedNumber] = useState(0);
  const [justLoaded, setJustLoaded] = useState(true);
  const commonDataForChildren = {
    color: "green",
    name: "loggedUsername",
    email: "some@thepracticalit.com"
  };

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

  // const textHandler = (event) => {
  //   //acceptedText = event.target.value;
  //   setAcceptedState(event.target.value);
  // }

  function textHandler(event) {
    setAcceptedNumber(parseInt(event.target.value));
    console.log(acceptedNumber);
  }
  return (
    <div className="App">
      <p>Accept only values that are above 20</p>
      {
        acceptedNumber < 20 && <Notification message="Number below 20 is not allowed" success={false} />
      }
      {
        acceptedNumber >= 20 && <Notification message="Perfect!" success={true} />
      }
      <div>You have entered {acceptedNumber}</div>
      <div><input type="text" onKeyUp={textHandler} /></div>
      <div><button type="button">Click For Notification</button></div>
      <Notification message="Initial default message [success]" success={true} />
      <Notification message="Successfully Registered [error]" success={false}/>
      <Notification message="Invalid input, try again [success]" success={true}/>
      <h3>Topics we have covered so far, but not limited to,.. </h3>
      
        {
          topics.map( topic => {
          return <div>{topic}</div>
          })
        }
      
    </div>
  );
}

export default App;
