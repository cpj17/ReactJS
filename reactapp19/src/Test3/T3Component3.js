import React from 'react';
import InputControls from './InputControls';
import { Box } from '@mui/material';

const T3Component3 = () => {
    const inputControlJson = [
        {
            inputControl: 'Textbox',
            inputType: 'text',
            designTemplate: 3,
            inputControlID: 'txtName',
            maxLength: 10,
            row: 0,
            column: 0,
            style: { height: 30, width: 330 },
            placeholder: 'Enter name',
            inputLabel: 'Name',
            defaultValue: '',
        },
        {
            inputControl: 'Textbox',
            inputType: 'text',
            designTemplate: 3,
            inputControlID: 'txtName2',
            maxLength: 10,
            row: 1,
            column: 0,
            style: { height: 30, width: 330 },
            placeholder: 'Enter name',
            inputLabel: 'Name',
            defaultValue: '',
        },
        // Add more items as needed
    ];

    const rows = 3;
    const columns = 3;
    const defaultTdWidth = 150; // Set your default width here


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
                                    <td key={columnIndex} style={{ width: defaultTdWidth }}>
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
        </Box>
    );
};

export default T3Component3;
