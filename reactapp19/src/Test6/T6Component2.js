import React from 'react'
import InputControls from './InputControls2'

const T6Component2 = () => {
  const inputControlJson = [
    {
      inputControl: 'Label',
      inputControlID: 'txt1',
      row: 0,
      column: 0,
      style: {},
      inputLabel: 'Currency/Exrate',
    },
    {
      inputControl: 'TEXTBOX',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt1',
      maxLength: 10,
      row: 0,
      column: 1,
      isDisabled: true,
      style: { height: 40, width: 330 },
      placeholder: '',
      inputLabel: '',
      defaultValue: 'SGD',
    },
    {
      inputControl: 'Label',
      inputControlID: 'txt1',
      row: 1,
      column: 0,
      style: {},
      inputLabel: 'Test',
    },
    {
      inputControl: 'NUMBERINPUT',
      inputType: '',
      inputControlID: 'txt1',
      row: 1,
      column: 1,
      isDisabled: false,
      placeholder: '',
      defaultValue: '',
      useGrouping: false,
      minFractionDigits: 0,
      maxFractionDigits: 0,
      min: 1,
      max: 10,
      locale: "en-US",
      mode: "",
      currency: "",
      currencyDisplay: "",
      prefix: "",
      suffix: "",
    },
    // {
    //   inputControl: 'Label',
    //   inputControlID: 'txt1',
    //   row: 2,
    //   column: 0,
    //   style: {},
    //   inputLabel: 'Test Radio',
    // },
    // {
    //   inputControl: 'CHECHBOXRADIO',
    //   inputType: 'radio',
    //   inputControlID: 'txt3',
    //   row: 2,
    //   column: 1,
    //   isDisabled: false,
    //   style: {},
    //   placeholder: '',
    //   inputLabel: 'Male',
    //   groupName: '',
    //   isChecked: false,
    // },
    // {
    //   inputControl: 'CHECHBOXRADIO',
    //   inputType: 'checkbox',
    //   inputControlID: 'txt2',
    //   row: 2,
    //   column: 2,
    //   isDisabled: false,
    //   style: {},
    //   placeholder: '',
    //   inputLabel: 'Female',
    //   groupName: '',
    //   isChecked: false,
    // },
    {
      inputControl: 'Label',
      inputControlID: 'txt1',
      row: 2,
      column: 0,
      style: {},
      inputLabel: 'QTY',
    },
    {
      inputControl: 'NUMBERINPUT',
      inputType: 'QTY',
      inputControlID: 'txt1',
      row: 2,
      column: 1,
      isDisabled: false,
      placeholder: '',
      defaultValue: '',
      useGrouping: true,
      locale: "en-US",
    },
    {
      inputControl: 'Label',
      inputControlID: 'txt1',
      row: 3,
      column: 0,
      style: {},
      inputLabel: 'QTY',
    },
    {
      inputControl: 'NUMBERINPUT',
      inputType: 'QTY',
      inputControlID: 'txt1',
      row: 3,
      column: 1,
      isDisabled: false,
      placeholder: '',
      defaultValue: '',
      useGrouping: true,
      locale: "en-US",
    },
  ]

  function handleChange({id, value}) {

  }

  const rows = 5;
  const columns = 5;
  const defaultTdWidth = 170
  const defaultTdHeight = 50;

  return (
    <div className='divTab1'>
      <br />
      <table border={0}>
        <tbody>
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(columns)].map((_, columnIndex) => {
                const inputControl = inputControlJson.find(
                  (control) =>
                    control.row === rowIndex && control.column === columnIndex
                );

                let colspan = 0;
                let rowspan = 0;

                if (inputControl !== undefined) {
                  if (inputControl.colspan !== undefined) {
                    colspan = inputControl.colspan
                  }
                  if (inputControl.rowspan !== undefined) {
                    rowspan = inputControl.rowspan
                  }
                }

                if (inputControl !== undefined && inputControl.isSpanCol !== undefined && inputControl.isSpanCol === true) {
                  return null
                }
                if (inputControl !== undefined && inputControl.isSpanRow !== undefined && inputControl.isSpanRow === true) {
                  return null
                }

                return (
                  <td
                    key={columnIndex}
                    style={{
                      width: defaultTdWidth,
                      height: defaultTdHeight,
                      textAlign: 'left',
                    }}
                    {...(colspan > 0 && { colSpan: colspan })}
                    {...(rowspan > 0 && { rowSpan: rowspan })}
                  >
                    {inputControl && (
                      <InputControls control={inputControl} handleChange={handleChange} />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default T6Component2