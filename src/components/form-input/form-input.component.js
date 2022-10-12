import './form-input.style.scss'

const FormInput =({label,...otherProps})=>{
    return(
        <div className="form-input">
            
            <input className="input-field" {...otherProps}/>
                    <label 
                    className={`${
                        otherProps.value.length>0?'shrink':''
                    } form-label`}
                    >
                        {label}
                    </label>
        </div>
    )
}

export default FormInput