function Notification(props) {

    let style = {
        success: {
            color: "green"
        },
        error: {
            color: "red"
        }
    }
  return (
    <div>
      <p style={props.success ? style.success : style.error}>{props.message}</p>
    </div>
  );
}

export default Notification;
