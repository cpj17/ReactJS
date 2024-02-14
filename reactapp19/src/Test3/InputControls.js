import React from 'react'
import TextField from '@mui/material/TextField';

function InputControl({ control, handleChange }) {
  
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
      return (
          <div>
              <TextField
                  {...inputProps}
              />
              <br /><br /><br />
          </div>
      )
  }
  if (control.designTemplate === 3) {
      inputProps.variant = "outlined"
      return (
          <div>
              <TextField
                  {...inputProps}
              />
              <br /><br /><br />
          </div>
      )
  }
  if (control.designTemplate === 4) {
      inputProps.variant = "standard"
      return (
          <div>
              <TextField
                  {...inputProps}
              />
              <br /><br /><br />
          </div>
      )
  }
}

export default InputControl