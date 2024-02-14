import React, { useEffect, useState } from 'react'

const inputControls = [
  {
    inputControl: "Textbox",
    inputType: "text",
    inputControlID: "txtName",
    maxLength: 10,
    style: { height: 30, width: 130 },
    placeholder: "Enter name",
    inputLable: "Name",
    defaultValue: "def",
  },
  {
    inputControl: "Textbox",
    inputType: "password",
    inputControlID: "txtPassword",
    maxLength: 10,
    style: { height: 30, width: 130 },
    placeholder: "Enter password",
    inputLable: "Password",
    defaultValue: "def psw",
  },
  {
    inputControl: "Textbox",
    inputType: "number",
    inputControlID: "txtAge",
    maxLength: 10,
    style: { height: 30, width: 130 },
    placeholder: "Enter age",
    inputLable: "Age",
    defaultValue: "10",
  },
  {
    inputControl: "Textbox",
    inputType: "email",
    inputControlID: "txtEmail",
    maxLength: 10,
    style: { height: 30, width: 230 },
    placeholder: "Enter email",
    inputLable: "Email",
    defaultValue: "no@no.no",
  },
]

function InputControl({ control, handleChange = () => {} }) {
  return (
    <div>
      <label> {control.inputLable} </label>
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

const T2Component1 = () => {
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
      {inputControls.map((inputControl, index) => {
        return <InputControl key={index} control={inputControl} handleChange={handleChange} />
      })}
      <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default T2Component1