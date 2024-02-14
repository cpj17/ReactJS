import React, { useEffect, useState, useMemo } from 'react'
import TextField from '@mui/material/TextField';

const inputControls = [
    {
        inputControl: "Textbox",
        inputType: "text",
        designTemplate: 4,
        inputControlID: "txtName",
        maxLength: 10,
        style: { height: 30, width: 330 },
        placeholder: "Enter name",
        inputLabel: "Name",
        defaultValue: "new",
    },
    {
        inputControl: "Textbox",
        inputType: "number",
        designTemplate: 2,
        inputControlID: "txtName",
        maxLength: 10,
        style: { height: 30, width: 330 },
        placeholder: "Enter name",
        inputLabel: "Number",
        defaultValue: "new",
    }
]

function InputControl({ control, handleChange }) {
    console.log(control)
    const inputProps = {
        type: control.inputType,
        maxLength: control.maxLength,
        placeholder: control.placeholder,
        style: control.style,
        defaultValue: control.defaultValue,
        label: control.inputLabel,
        onChange: (e) => handleChange(control.inputControlID, e.target.value)
    }
    
    if (control.designTemplate === 1) {
        console.log("first")
        return (
            <div>
                <label> {control.inputLabel} </label>
                <input
                    {...inputProps}
                />
            </div>
        )
       
    }
    if (control.designTemplate === 2) {
        inputProps.variant = "filled"
        console.log("sec")
        return (
            <div>
                <TextField
                    {...inputProps}
                />
            </div>
        )
    }
    if (control.designTemplate === 3) {
        inputProps.variant = "outlined"
        console.log("sec")
        return (
            <div>
                <TextField
                    {...inputProps}
                />
            </div>
        )
    }
    if (control.designTemplate === 4) {
        inputProps.variant = "standard"
        console.log("sec")
        return (
            <div>
                <TextField
                    {...inputProps}
                />
            </div>
        )
    }
}

const T2Component4 = () => {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        const initialValue = {};
        inputControls.forEach((control) => {
            initialValue[control.inputControlID] = control.defaultValue || '';
        });
        setFormData(initialValue);
    }, []);

    const memoizedInputControls = useMemo(() => inputControls, []); // Memoizing inputControls array

    function handleChange(filedName, value) {
        setFormData({
            ...formData,
            [filedName]: value
        })
    }
    return (
        <div>
            <br />
            {memoizedInputControls.map((inputControl, index) => (
                <div key={index}>
                    <InputControl control={inputControl} handleChange={handleChange} /> <br />
                </div>
            ))}
        </div>
    )
}

export default T2Component4