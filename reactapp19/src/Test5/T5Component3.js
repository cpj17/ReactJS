import React from 'react'
import InputControls from './InputControls2'

const T5Component3 = () => {
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
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 2,
            colspan: 2,
            isDisabled: true,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.000',
        },
        {
            row: 0,
            column: 3,
            isSpanCol: true,
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 2,
            column: 0,
            rowspan: 2,
            style: {},
            inputLabel: 'Test Label',
        },
        {
            row: 3,
            column: 0,
            isSpanRow: true,
        },
    ]

    function handleChange() {

    }

    const rows = 4;
    const columns = 4;
    const defaultTdWidth = 170
    const defaultTdHeight = 50;

    return (
        <div className='divTab1'>
            <br />
            <table border={0} className='table-bordered'>
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

export default T5Component3