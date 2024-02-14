// TextInput.js

import React from 'react';
import './Test8Style.css'; // Import the CSS file

function TextBox() {
    return (
        <div style={{display: 'flex'}}>
            <TextInput label={"Name"} />
            &nbsp;&nbsp;&nbsp;
            <TextInput label={"ffff"} />
        </div>
    )
}

const TextInput = ({ label, value, onChange }) => {
    return (
        <div className="text-input">
            <label className="clsLabel">{label}</label>
            <input className="clsInput" type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default TextBox;
