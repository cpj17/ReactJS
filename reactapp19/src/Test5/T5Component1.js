import React, { useState } from 'react'
import './HorizontalTabs.css'
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './SplitterStyle.css'
import InputControls from './InputControls2'

const T5Component1 = () => {
    const tabsData = [
        { label: 'GRN', content: <Level1Tab1Content /> },
        { label: 'Details', content: <Level1Tab2Content /> },
        // Add more tabs as needed
    ];
    const tabsData2 = [
        { label: 'Details', content: "content 1" },
        { label: 'Details 2', content: "content 2" },
        // Add more tabs as needed
    ];

    return (
        <div>
            <Splitter style={{ minHeight: '0px', height: '100vh' }} layout="vertical">
                <SplitterPanel style={{overflow: 'auto', minHeight: '0px' }} className="flex align-items-center justify-content-center">
                    <HorizontalTabs tabs={tabsData} legend="GRN" />
                </SplitterPanel>

                <SplitterPanel style={{ overflow: 'auto', minHeight: '300px' }} className="flex align-items-center justify-content-center">
                    <HorizontalTabs tabs={tabsData2} legend="Products" />
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

const HorizontalTabs = ({ tabs, legend }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="horizontal-tabs-container">
            {legend && <legend className="legend">{legend}</legend>}
            <div className="horizontal-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content-wrapper">
                <div className="tab-content">{tabs[activeTab].content}</div>
            </div>
        </div>
    );
};

function Level1Tab1Content() {
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
            isDisabled: true,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'GRN010001',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 1,
            column: 0,
            style: {  },
            inputLabel: 'Trans Date',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'date',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '2024-01-16',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 2,
            column: 0,
            style: {  },
            inputLabel: 'Confirm Date',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'date',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 2,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '2024-01-16',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 3,
            column: 0,
            style: {  },
            inputLabel: 'Trans Type',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 3,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'PO',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 4,
            column: 0,
            style: {  },
            inputLabel: 'PO No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 4,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'PO12010',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 5,
            column: 0,
            style: {  },
            inputLabel: 'DO No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 5,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'DO12010',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 6,
            column: 0,
            style: {  },
            inputLabel: 'Supplier Invoice No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 6,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'DO12010',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 7,
            column: 0,
            style: {  },
            inputLabel: 'Supplier Invoice Date',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'date',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 7,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '2024-01-17',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 8,
            column: 0,
            style: {  },
            inputLabel: 'AR Invoice No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 8,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'AR0909096',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 3,
            style: {  },
            inputLabel: 'Warehouse',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 4,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'WH',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'WH0001',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 1,
            column: 3,
            style: {  },
            inputLabel: 'Supplier',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 4,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'SUP007',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'Kaira Technologies Pte Ltd',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 2,
            column: 3,
            style: {  },
            inputLabel: 'Supplier Address',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 2,
            column: 4,
            colspan: 2,
            isDisabled: false,
            style: { height: 40, width: 665, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            row: 2,
            column: 5,
            isSpanCol: true,
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 3,
            column: 3,
            style: {  },
            inputLabel: 'Remarks',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 3,
            column: 4,
            colspan: 2,
            isDisabled: false,
            style: { height: 80, width: 665, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            row: 3,
            column: 5,
            isSpanCol: true,
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 4,
            column: 3,
            style: {  },
            inputLabel: 'Barcode',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 4,
            column: 4,
            colspan: 2,
            isDisabled: false,
            style: { height: 40, width: 665 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            row: 4,
            column: 5,
            isSpanCol: true,
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 5,
            column: 3,
            style: {  },
            inputLabel: 'Trans Status',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 5,
            column: 4,
            colspan: 2,
            isDisabled: false,
            style: { height: 40, width: 665 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'UF',
        },
        {
            row: 5,
            column: 5,
            isSpanCol: true,
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 6,
            column: 3,
            style: {  },
            inputLabel: 'Process Status',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 6,
            column: 4,
            colspan: 2,
            isDisabled: false,
            style: { height: 40, width: 665 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            row: 6,
            column: 5,
            isSpanCol: true,
        },
    ]

    function handleChange() {

    }

    const rows = 9;
    const columns = 8;
    const defaultTdWidth = 170
    const defaultTdHeight = 0; // Set your default height here

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
                                        valign='top'
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

function Level1Tab2Content() {
    const inputControlJson = [
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 0,
            style: {  },
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
            style: {  },
            inputLabel: 'Trans Date',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'date',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '2024-01-17',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 2,
            column: 0,
            style: {  },
            inputLabel: 'Gross Amount',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 2,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 2,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 3,
            column: 0,
            style: {  },
            inputLabel: 'Total Disc Amount',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 3,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 3,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 4,
            column: 0,
            style: {  },
            inputLabel: 'Taxable Amount',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 4,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 4,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 5,
            column: 0,
            style: {  },
            inputLabel: 'Tax Amount',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 5,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 5,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 6,
            column: 0,
            style: {  },
            inputLabel: 'Adjustment Amount',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 6,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 6,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 7,
            column: 0,
            style: {  },
            inputLabel: 'Total Amount',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 7,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 7,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 8,
            column: 0,
            style: {  },
            inputLabel: 'Freight Cost',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 8,
            column: 1,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'number',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 8,
            column: 2,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '1.00',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 0,
            column: 4,
            style: {  },
            inputLabel: 'Phone No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 0,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 1,
            column: 4,
            style: {  },
            inputLabel: 'Container No/Truck No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'NA',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 1,
            column: 6,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'NA',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 2,
            column: 4,
            style: {  },
            inputLabel: 'Payment Type',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 2,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'CHQ',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 3,
            column: 4,
            style: {  },
            inputLabel: 'Country of orgin',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 3,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'SG',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 3,
            column: 6,
            isDisabled: true,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'Singapore',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 4,
            column: 4,
            style: {  },
            inputLabel: 'Buyer 1/ Created By',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 4,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'Admin',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 4,
            column: 6,
            isDisabled: true,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'BBTERENCE',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 5,
            column: 4,
            style: {  },
            inputLabel: 'Your/Our Ref No',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 5,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 5,
            column: 6,
            isDisabled: false,
            style: { height: 40, width: 330, backgroundColor: '#d2edfd' },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 6,
            column: 4,
            style: {  },
            inputLabel: 'Request Order ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 6,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: '',
        },
        {
            inputControl: 'Label',
            inputControlID: 'txt1',
            row: 7,
            column: 4,
            style: {  },
            inputLabel: 'Agent ID',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 7,
            column: 5,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'NA',
        },
        {
            inputControl: 'TEXTBOX',
            inputType: 'text',
            designTemplate: 2,
            inputControlID: 'txt1',
            maxLength: 10,
            row: 7,
            column: 6,
            isDisabled: false,
            style: { height: 40, width: 330 },
            placeholder: '',
            inputLabel: '',
            defaultValue: 'Not applicable',
        },
    ]

    function handleChange() {

    }

    const rows = 9;
    const columns = 8;
    const defaultTdWidth = 170
    const defaultTdHeight = 50; // Set your default height here

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

function Leve2Tab1Content() {
    
}

export default T5Component1