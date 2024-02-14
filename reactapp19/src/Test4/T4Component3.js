import React from 'react'
import InputControls from './InputControls2'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style2.css'

const T4Component3 = () => {
    const inputControlJson = [
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 0,
            style: {  },
            inputLabel: 'Trans ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 1,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: 'Trans ID',
            defaultValue: 'GRN010001',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 1,
            column: 0,
            style: {  },
            inputLabel: 'Trans ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 1,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: 'Trans ID',
            defaultValue: 'GRN010001',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 2,
            style: {  },
            inputLabel: 'Trans ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 3,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: 'Trans ID',
            defaultValue: 'GRN010001',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 4,
            style: {  },
            inputLabel: 'Trans ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 5,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: 'Trans ID',
            defaultValue: 'GRN010001',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 6,
            style: {  },
            inputLabel: 'Trans ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 7,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: 'Trans ID',
            defaultValue: 'GRN010001',
        },
    ]

    function handleChange() {

    }

    const rows = 9;
    const columns = 8;
    const defaultTdWidth = 150; // Set your default width here
    const defaultTdHeight = 10; // Set your default height here

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

                                    return (
                                        <td key={columnIndex} style={{ width: defaultTdWidth, height: defaultTdHeight }}>
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
    )
}

export default T4Component3