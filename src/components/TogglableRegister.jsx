import PropTypes from "prop-types";
import { useState } from "react";

const ToggableRegister = (props) => {

    const [visibility, setVisibility] = useState(true)

    const showOnVisible = { display: visibility ? '' : 'none' }
    const hideOnVisible = { display: visibility ? 'none' : '' }

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    return (
        <div>
            <div style={hideOnVisible}>
                <button type='button' onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showOnVisible}>
                {props.children}
                <button type='button' onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    )
}

Toggable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default ToggableRegister