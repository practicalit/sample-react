import './Button.css';
function Button(props) {
  let buttonStyle = {
    border: {
      fontSize: "10px",
      fontWeight: "bold",
    },
  };
  return (
    <div style={buttonStyle.border}>
      <button className="btn theButton" name="btnName" id={props.id}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
