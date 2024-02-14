import React, { useState } from 'react';

const TableComponent = () => {
  const inputControlJson = [
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 3,
      inputControlID: 'txtName',
      maxLength: 10,
      row: 0,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: 'Enter name',
      inputLabel: 'Name',
      defaultValue: 'def',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 3,
      inputControlID: 'txtName2',
      maxLength: 10,
      row: 0,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: 'Enter name',
      inputLabel: 'Name',
      defaultValue: 'def 2',
    },
    // Add more items as needed
  ];

  const rows = 3;
  const columns = 3;
  const defaultTdWidth = 150; // Set your default width here

  const [inputValues, setInputValues] = useState(
    inputControlJson.reduce((acc, control) => {
      acc[`${control.row}-${control.column}`] = control.defaultValue;
      return acc;
    }, {})
  );

  const handleInputChange = (row, column, value) => {
    // Ensure row and column are within valid range
    const validRow = Math.min(Math.max(row, 0), rows - 1);
    console.log(validRow)
    const validColumn = Math.min(Math.max(column, 0), columns - 1);

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [`${validRow}-${validColumn}`]: value,
    }));
  };

  return (
    <table>
      <tbody>
        {[...Array(rows)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(columns)].map((_, columnIndex) => {
              const inputControl = inputControlJson.find(
                (control) =>
                  control.row === rowIndex && control.column === columnIndex
              );

              return (
                <td key={columnIndex} style={{ width: defaultTdWidth }}>
                  {inputControl && (
                    <input
                      type={inputControl.inputType}
                      value={inputValues[`${rowIndex}-${columnIndex}`]}
                      onChange={(e) =>
                        handleInputChange(
                          rowIndex,
                          columnIndex,
                          e.target.value
                        )
                      }
                      style={inputControl.style}
                      placeholder={inputControl.placeholder}
                    />
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
