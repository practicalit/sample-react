function Button(props) {
    return(
    <button name="btnName" id={props.id}>{props.label}</button>
    )
}

export default Button;