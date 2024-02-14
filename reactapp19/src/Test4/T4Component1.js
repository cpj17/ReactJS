import React, { useState } from 'react';
import './VerticalTabs.css';
import InputControls from './InputControls';
import { Box } from '@mui/material';
import { PrimeReactProvider } from 'primereact/api';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './Style1.css'

const T4Component1 = () => {
  const tabs = [
    { label: 'GRN', content: <Level1Tab1Content /> },
    { label: 'Detail', content: <Leve1Tab2Content /> },
  ];
  const tabs2 = [
    { label: 'Details', content: <Level1Tab1Content /> },
    { label: 'Details 2', content: <Leve1Tab2Content /> },
  ];
  const tabs3 = [
    { label: 'Details', content: <Level1Tab1Content /> },
    { label: 'Details 2', content: <Leve1Tab2Content /> },
  ];
  return (
    <PrimeReactProvider>
      <Splitter style={{ height: '860px' }} layout='vertical' >
        <SplitterPanel style={{ minHeight: '200px', backgroundColor: 'white' }} className="flex align-items-center justify-content-center">
          <VerticalTabs tabs={tabs} legend="GRN" />
        </SplitterPanel>
        
        <SplitterPanel style={{ minHeight: '200px', backgroundColor: 'white' }} className="flex align-items-center justify-content-center">
          <VerticalTabs tabs={tabs2} legend="Product" />
        </SplitterPanel>

        <SplitterPanel style={{ minHeight: '200px', backgroundColor: 'white' }} className="flex align-items-center justify-content-center">
          <VerticalTabs tabs={tabs3} legend="Location" />
        </SplitterPanel>
      </Splitter>
    </PrimeReactProvider>
    // <VerticalTabs tabs={tabs} legend="GRN" />
  );
};

const VerticalTabs = ({ tabs, legend }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="vertical-tabs-container">
      {legend && <legend className="legend">{legend}</legend>}
      <div className="vertical-tabs">
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
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

function Level1Tab1Content() {
  const inputControlJson = [
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt1',
      maxLength: 10,
      row: 0,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: 'Enter name',
      inputLabel: 'Trans ID',
      defaultValue: 'GRN010001',
    },
    {
      inputControl: 'Textbox',
      inputType: 'date',
      designTemplate: 2,
      inputControlID: 'txt2',
      maxLength: 10,
      row: 1,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Trans Date',
      defaultValue: '2024-01-06',
    },
    {
      inputControl: 'Textbox',
      inputType: 'date',
      designTemplate: 2,
      inputControlID: 'txt3',
      maxLength: 10,
      row: 2,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Confirm Date',
      defaultValue: '2024-01-06',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt4',
      maxLength: 10,
      row: 3,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Trans Type',
      defaultValue: 'PO',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt5',
      maxLength: 10,
      row: 4,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'PO No',
      defaultValue: 'PONO1101',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt6',
      maxLength: 10,
      row: 5,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'DO No',
      defaultValue: 'DONO11',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt7',
      maxLength: 10,
      row: 6,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Supplier Invoice No',
      defaultValue: 'DONO11',
    },
    {
      inputControl: 'Textbox',
      inputType: 'date',
      designTemplate: 2,
      inputControlID: 'txt8',
      maxLength: 10,
      row: 7,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Supplier Invoice Date',
      defaultValue: '2023-01-06',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 8,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'AP Invoice No',
      defaultValue: 'AR0000101',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt10',
      maxLength: 10,
      row: 0,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Warehouse',
      defaultValue: 'WH01',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt11',
      maxLength: 10,
      row: 0,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Warehouse',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt12',
      maxLength: 10,
      row: 1,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Supplier',
      defaultValue: '927V',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt13',
      maxLength: 10,
      row: 1,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Supplier',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt14',
      maxLength: 10,
      row: 2,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Supplier Address',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt15',
      maxLength: 10,
      row: 3,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Remarks',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt16',
      maxLength: 10,
      row: 4,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Barcode',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt17',
      maxLength: 10,
      row: 5,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Trans Status',
      defaultValue: 'UF',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt18',
      maxLength: 10,
      row: 6,
      column: 2,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Process Status',
      defaultValue: '',
    },
  ];

  const rows = 9;
  const columns = 4;
  const defaultTdWidth = 150; // Set your default width here
  const defaultTdHeight = 10; // Set your default height here

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
    </Box>
  )
}

function Leve1Tab2Content() {
  const inputControlJson = [
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt1',
      maxLength: 10,
      row: 0,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Currency',
      defaultValue: 'SGD',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt2',
      maxLength: 10,
      row: 0,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Exrate',
      defaultValue: '1.00',
      sx: { textAlign: 'right' }
    },
    {
      inputControl: 'Textbox',
      inputType: 'date',
      designTemplate: 2,
      inputControlID: 'txt3',
      maxLength: 10,
      row: 1,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Trans Date',
      defaultValue: '2024-01-06',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt4',
      maxLength: 10,
      row: 2,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Gross Amount',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt4',
      maxLength: 10,
      row: 2,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt5',
      maxLength: 10,
      row: 3,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Total Disc Amt',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt5',
      maxLength: 10,
      row: 3,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt6',
      maxLength: 10,
      row: 4,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Taxable Amt',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt7',
      maxLength: 10,
      row: 4,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt8',
      maxLength: 10,
      row: 5,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Tax Amt',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 5,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt8',
      maxLength: 10,
      row: 6,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Adjustment Amt',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 6,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt8',
      maxLength: 10,
      row: 7,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Total Amt',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 7,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt8',
      maxLength: 10,
      row: 8,
      column: 0,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Frieght Cost',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 8,
      column: 1,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: ' ',
      defaultValue: '0.00',
    },
    {
      inputControl: 'Textbox',
      inputType: 'number',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 0,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Phone Number',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 1,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Container No',
      defaultValue: 'NA',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 1,
      column: 4,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Truck No',
      defaultValue: 'NA',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 2,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Payment Type',
      defaultValue: 'CHQ',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 3,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Contry of orgin',
      defaultValue: 'SG',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 3,
      column: 4,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: '',
      defaultValue: 'Singapore',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 4,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Your/Our Ref No',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 4,
      column: 4,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: '',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 5,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Request Order ID',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 6,
      column: 3,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: 'Agent ID',
      defaultValue: '',
    },
    {
      inputControl: 'Textbox',
      inputType: 'text',
      designTemplate: 2,
      inputControlID: 'txt9',
      maxLength: 10,
      row: 6,
      column: 4,
      style: { height: 30, width: 330 },
      placeholder: '',
      inputLabel: '',
      defaultValue: '',
    },
  ];

  const rows = 9;
  const columns = 5;
  const defaultTdWidth = 150; // Set your default width here
  const defaultTdHeight = 10; // Set your default height here

  function handleChange() {

  }
  return (
    <Box
      margin={1}
      padding={2}
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
    </Box>
  )
}

export default T4Component1;
