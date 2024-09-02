import PropTypes from 'prop-types'

const Field = (props) => {
    return (
        <div>
        <label >{props.text}</label>
        <input onChange={props.onChange} className={props.class} type = {props.type} value={props.value} name={props.name} required>
            
        </input>
        </div>
    )
}


Field.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
}

Field.defaultProps = {
    type: 'text'
}



export default Field
