// DynamicForm.js
import React, { useState } from 'react';
import InputControl from './T1Component3';

const DynamicForm = ({ controls }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  function handleSubmit() {
    alert(formData.Name)
    alert(formData.Username)
    alert(formData.Password)
  }
  return (
    <form onSubmit={handleSubmit}>
      {controls.map((control, index) => (
        <InputControl
          key={index}
          control={control}
          onChange={(value) => handleInputChange(control.label, value)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
