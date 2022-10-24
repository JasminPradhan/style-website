import './button.style.scss'

const BUTTON_TYPE = {
    google: 'google',
    inverted: 'inverted'
}

const Button = ({ props,icons, btnType, ...otherProps }) => {
    return (
        <button
            className={`button ${BUTTON_TYPE[btnType]}`}
            {...otherProps}
        >
            {props}
        </button>
    )
}

export default Button