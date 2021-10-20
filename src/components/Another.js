import { useEffect, useState } from "react";

function Another(props) {
  //without the usage of the state, the name can't keep the state
  //changes are not honored.
  //let name = "john";

  useEffect(() => {
    console.log("Hey, nice to meet you world.")
  }, []);

  //to maintain the state, use the useState hook
  const [name, setName] = useState("jenny");//initialized with name john
  const [email, setEmail] = useState("");//initialized with name john

  function buttonHandler(event) {
    // console.log("hello " + name);
    // name = 'jenny';
    // console.log("hello " + name);

    //name = 'john'; //this is wrong, you can't assign value directly 
    setName('john');
  }

  function nameHandler(event) {
    //console.log(event.target.value);
    //name = event.target.value;
    setName(event.target.value);
  }

  function emailHandler(event) {
    //console.log(event.target.value);
    //name = event.target.value;
    setEmail(event.target.value);
  }

  return(
    <>
    <div>{name} {email}</div>
    <div>Name: {props.commonData.name}</div>
    <div>Your Name<input onKeyUp={nameHandler} type="text" /></div>
    <div>Your Email<input onKeyUp={emailHandler} type="text" /></div>
    <div><button onClick={buttonHandler} type="button">Click</button></div>
    </>
  );
}

export default Another;
