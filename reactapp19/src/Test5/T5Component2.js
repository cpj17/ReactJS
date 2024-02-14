import React from 'react'
import InputControls from './InputControls2'

const T5Component2 = () => {
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
            isDisabled: true,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.000',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 1,
            column: 0,
            style: {},
            inputLabel: 'Trans Date',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 1,
            colspan: 2,
            isDisabled: false,
            style: { height: 40, width: 670, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
    ]

    function handleChange() {

    }

    const rows = 3;
    const columns = 4;
    const defaultTdWidth = 170
    const defaultTdHeight = 50;

    let rowIndexForNull = 9999
    let columnIndexForNull = 9999

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

                                if (inputControl !== undefined) {
                                    if (inputControl.colspan !== undefined) {
                                        colspan = inputControl.colspan
                                        rowIndexForNull = inputControl.row
                                        columnIndexForNull = inputControl.column + 1
                                    }
                                }

                                if (rowIndex === rowIndexForNull && columnIndex === columnIndexForNull) {
                                    rowIndexForNull = 999
                                    columnIndexForNull = 999
                                    colspan = 0

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
                                        colSpan={colspan}
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

export default T5Component2