function Button(props){
    return <div>
        <button onClick={props.clickClass} className={props.class}>
            {props.text}
        </button>
    </div>
}

export default Button;