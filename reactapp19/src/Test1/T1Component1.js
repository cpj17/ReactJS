// App.js
import React from 'react';
import DynamicForm from './T1Component2';

const inputControlsConfig = [
    {
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
        maxLength: 20,
        style: { height: '30px', width: '200px' },
    },
    {
        label: 'Username',
        type: 'text',
        placeholder: 'Enter your username',
        maxLength: 20,
        style: { height: '30px', width: '200px' },
    },
    {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        maxLength: 10,
        style: { height: '30px', width: '200px' },
    },
    // Add more controls as needed
];

const App = () => {
    return (
        <div>
            <h1>Dynamic Form Example</h1>
            <DynamicForm controls={inputControlsConfig} />
        </div>
    );
};

export default App;
