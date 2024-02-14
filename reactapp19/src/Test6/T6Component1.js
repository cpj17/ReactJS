import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import ProviderPrimeReact from './Provider/ProviderPrimeReact'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primeflex/primeflex.css';                                   // css utility
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import './InputNumberStyle.css';

export default function NumeralsDemo() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    return (
        <ProviderPrimeReact>
            <h3> Numerals </h3>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                    <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                </div>
                {/* <div className="flex-auto">
                    <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                    <InputNumber
                        inputId="integeronly"
                        value={value1}
                        onValueChange={(e) => setValue1(e.value)}
                        className="test"
                        style={{ backgroundColor: 'cyan' }}
                    />
                </div> */}

                <div className="flex-auto">
                    <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                    <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                    <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                    <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
                </div>
            </div>

            <br />
            <h3> Locale </h3>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="locale-user" className="font-bold block mb-2">User Locale</label>
                    <InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="locale-us" className="font-bold block mb-2">United States Locale</label>
                    <InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="locale-german" className="font-bold block mb-2">German Locale</label>
                    <InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="locale-indian" className="font-bold block mb-2">Indian Locale</label>
                    <InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
                </div>
            </div>

            <br />
            <h3> Curreny </h3>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                    <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-germany" className="font-bold block mb-2">Germany</label>
                    <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-india" className="font-bold block mb-2">India</label>
                    <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-japan" className="font-bold block mb-2">Japan</label>
                    <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-japan" className="font-bold block mb-2">Singapore</label>
                    <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="SGD" locale="en-SG" />
                </div>
            </div>

            <br />
            <h3> Prefix & Suffix </h3>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="mile" className="font-bold block mb-2">Mile</label>
                    <InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="percent" className="font-bold block mb-2">Percent</label>
                    <InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="expiry" className="font-bold block mb-2">Expiry</label>
                    <InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="temperature" className="font-bold block mb-2">Temperature</label>
                    <InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
                </div>
            </div>
        </ProviderPrimeReact>
    )
}