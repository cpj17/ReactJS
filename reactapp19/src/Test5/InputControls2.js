import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const InputControls2 = ({ control, handleChange }) => {
    if (control.inputControl.toUpperCase() === "TEXTBOX") {
        const inputProps = {
            type: control.inputType,
            maxLength: control.maxLength,
            placeholder: control.placeholder,
            style: {
                ...control.style, // Keep existing styles
                textAlign: control.inputType.toUpperCase() === "NUMBER" ? "right" : "left"
            },
            defaultValue: control.defaultValue,
            label: control.inputLabel,
            disabled: control.isDisabled,
            onChange: (e) => handleChange(control.inputControlID, e.target.value)
        }

        if (control.designTemplate === 1) {
            return (
                <div>
                    <label> {control.inputLabel} </label>
                    <input
                        // className='form-control'
                        {...inputProps}
                    />
                </div>
            )

        }
        if (control.designTemplate === 2) {
            return (
                <>
                    <input
                        // className='form-control'
                        {...inputProps}
                    />
                </>
            )

        }
    }
    if (control.inputControl.toUpperCase() === "LABEL") {
        return (
            <label htmlFor=""> {control.inputLabel} </label>
        )
    }
}

export default InputControls2