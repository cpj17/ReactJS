import React from 'react';
import InputControls from './InputControls';
import { Box } from '@mui/material';

const inputControlJson = [
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
    inputControlID: "txtName2",
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
    inputControlID: "txtName2",
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
    inputControlID: "txtName2",
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
    inputControlID: "txtName2",
    maxLength: 10,
    style: { height: 30, width: 330 },
    placeholder: "Enter name",
    inputLabel: "Name",
    defaultValue: "def",
  },
];

function InputControlContainer({ inputControls, handleChange }) {
  return (
    <>
      {inputControls.map((input) => (
        <InputControls key={input.inputControlID} control={input} handleChange={handleChange} />
      ))}
    </>
  );
}

const T3Component1 = () => {
  function handleChange() {

  }
  return (
    <Box
      margin={1}
      padding={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* <div style={{ height: '300px', width: '100%', backgroundColor: 'cyan' }}> content 1 </div> <br /> */}

      <InputControlContainer inputControls={inputControlJson} handleChange={handleChange} />

      <br />
      <div style={{ height: '300px', width: '100%', backgroundColor: 'lightgray', minHeight: '300px', overflow: 'auto' }}>
        <br />
        <InputControlContainer inputControls={inputControlJson} handleChange={handleChange} />
      </div> <br />
    </Box>
  );
};

export default T3Component1;