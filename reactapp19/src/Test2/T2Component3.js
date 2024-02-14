import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';

const inputControls = [
  {
    inputControl: "Textbox",
    inputType: "text",
    designTemplate: 3,
    inputControlID: "txtName",
    maxLength: 10,
    style: { height: 30, width: 330 },
    placeholder: "Enter name",
    inputLabel: "Name",
    defaultValue: "def",
  },
  {
    inputControl: "Textbox",
    inputType: "text",
    designTemplate: 3,
    inputControlID: "txtName1",
    maxLength: 10,
    style: { height: 30, width: 330 },
    placeholder: "Enter name",
    inputLabel: "Name",
    defaultValue: "def",
  },
]

function InputControl({ control, handleChange = () => { } }) {

  if (control.designTemplate === 1) {
    return (
      <div>
        <label> {control.inputLabel} </label>
        <input
          type={control.inputType}
          maxLength={control.maxLength}
          placeholder={control.placeholder}
          style={control.style}
          defaultValue={control.defaultValue}
          onChange={(e) => handleChange(control.inputControlID, e.target.value)}
        />
      </div>
    )
  }
  if (control.designTemplate === 2) {
    return (
      <div>
        <TextField
          variant='filled'
          label={control.inputLabel}
          type={control.inputType}
          maxLength={control.maxLength}
          placeholder={control.placeholder}
          style={control.style}
          defaultValue={control.defaultValue}
          onChange={(e) => handleChange(control.inputControlID, e.target.value)}
        />
      </div>
    )
  }
  if (control.designTemplate === 3) {
    return (
      <div>
        <TextField
          variant='outlined'
          label={control.inputLabel}
          type={control.inputType}
          maxLength={control.maxLength}
          placeholder={control.placeholder}
          style={control.style}
          defaultValue={control.defaultValue}
          onChange={(e) => handleChange(control.inputControlID, e.target.value)}
        />
      </div>
    )
  }
  if (control.designTemplate === 4) {
    return (
      <div>
        <TextField
          variant='standard'
          label={control.inputLabel}
          type={control.inputType}
          maxLength={control.maxLength}
          placeholder={control.placeholder}
          style={control.style}
          defaultValue={control.defaultValue}
          onChange={(e) => handleChange(control.inputControlID, e.target.value)}
        />
      </div>
    )
  }
}

const T2Component3 = () => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    const initialValue = {}
    inputControls.forEach((control) => {
      initialValue[control.inputControlID] = control.defaultValue || ''
    })
    setFormData(initialValue)
  }, [])
  function handleChange(filedName, value) {
    setFormData({
      ...formData,
      [filedName]: value
    })
  }
  function handleSubmit() {
    alert(formData.txtName)
    alert(formData.txtPassword)
    alert(formData.txtAge)
  }
  return (
    <div>
      <br />
      {inputControls.map((inputControl, index) => {
        return <InputControl key={index} control={inputControl} handleChange={handleChange} />
      })}
      <br />
      <br />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default T2Component3