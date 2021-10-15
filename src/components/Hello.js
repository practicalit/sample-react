function Hello() {
    let color = "blue";
    const randomNumber = () => Math.random() * 10;
  return(
      <>
    <div>hello world from the component</div>
    <div>another part here</div>
  <p>the color of the day is {color} and random number is {randomNumber()}</p>
    
    </>
  );
}

export default Hello;
