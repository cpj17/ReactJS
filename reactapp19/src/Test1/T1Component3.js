// InputControl.js
import React from 'react';

const InputControl = ({ control, onChange }) => {
  const { type, label, placeholder, maxLength, style, height, width } = control;

  return (
    <div style={{ marginBottom: '10px', ...style }}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ height, width }}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputControl;
