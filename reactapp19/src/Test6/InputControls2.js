import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputNumber } from 'primereact/inputnumber';
import ProviderPrimeReact from './Provider/ProviderPrimeReact'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primeflex/primeflex.css';                                   // css utility
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import './InputNumberStyle.css';

const InputControls2 = ({ control, handleChange }) => {
    if (control.inputControl.toUpperCase() === "TEXTBOX") {
        const inputProps = {
            type: control.inputType,
            maxLength: control.maxLength,
            placeholder: control.placeholder,
            style: {
                ...control.style, // Keep existing styles
                textAlign: control.inputType.toUpperCase() === "NUMBER" ? "right" : "left"
            },
            defaultValue: control.defaultValue,
            label: control.inputLabel,
            disabled: control.isDisabled,
            onChange: (e) => handleChange(control.inputControlID, e.target.value)
        }

        if (control.designTemplate === 1) {
            return (
                <div>
                    <label> {control.inputLabel} </label>
                    <input
                        className='form-control'
                        {...inputProps}
                    />
                </div>
            )

        }
        if (control.designTemplate === 2) {
            return (
                <>
                    <input
                        className='form-control'
                        {...inputProps}
                    />
                </>
            )

        }
    }
    if (control.inputControl.toUpperCase() === "LABEL") {
        return (
            <label htmlFor=""> {control.inputLabel} </label>
        )
    }
    if (control.inputControl.toUpperCase() === "NUMBERINPUT") {
        if (control.inputType.toUpperCase() === "QTY") {
            return (
                <ProviderPrimeReact>
                    <InputNumber
                        inputId={control.inputControlID}
                        {...(control.defaultValue && { value: control.defaultValue })}
                        onValueChange={handleChange}
                        useGrouping={control.useGrouping}
                        {...(control.minFractionDigits ? { minFractionDigits: control.minFractionDigits } : {minFractionDigits: 0} )}
                        {...(control.maxFractionDigits ? { maxFractionDigits: control.maxFractionDigits } : {maxFractionDigits: 2} )}
                        {...(control.locale && { locale: control.locale })}
                        {...(control.prefix && { prefix: control.prefix })}
                        {...(control.suffix && { suffix: control.suffix })}
                        className="rightAlign"
                    />
                </ProviderPrimeReact>
            )
        }
        if (control.inputType.toUpperCase() === "CURRENCY") {
            return (
                <ProviderPrimeReact>
                    <InputNumber
                        inputId={control.inputControlID}
                        {...(control.defaultValue && { value: control.defaultValue })}
                        onValueChange={handleChange}
                        useGrouping={control.useGrouping}
                        {...(control.minFractionDigits ? { minFractionDigits: control.minFractionDigits } : {minFractionDigits: 0} )}
                        {...(control.maxFractionDigits ? { maxFractionDigits: control.maxFractionDigits } : {maxFractionDigits: 2} )}
                        {...(control.locale && { locale: control.locale })}
                        {...(control.mode && { mode: control.mode })}
                        {...(control.currency && { currency: control.currency })}
                        {...(control.currencyDisplay && { currencyDisplay: control.currencyDisplay })}
                        {...(control.prefix && { prefix: control.prefix })}
                        {...(control.suffix && { suffix: control.suffix })}
                        className="rightAlign"
                    />
                </ProviderPrimeReact>
            )
        }
        else {
            return (
                <ProviderPrimeReact>
                    <InputNumber
                        inputId={control.inputControlID}
                        {...(control.defaultValue && { value: control.defaultValue })}
                        onValueChange={handleChange}
                        useGrouping={control.useGrouping}
                        {...(control.useGrouping && { useGrouping: control.defaultValue })}
                        {...(control.minFractionDigits && { minFractionDigits: control.minFractionDigits })}
                        {...(control.maxFractionDigits && { maxFractionDigits: control.maxFractionDigits })}
                        {...(control.locale && { locale: control.locale })}
                        {...(control.mode && { mode: control.mode })}
                        {...(control.currency && { currency: control.currency })}
                        {...(control.currencyDisplay && { currencyDisplay: control.currencyDisplay })}
                        {...(control.prefix && { prefix: control.prefix })}
                        {...(control.suffix && { suffix: control.suffix })}
                    />
                </ProviderPrimeReact>
            )
        }
    }
    if (control.inputControl.toUpperCase() === "CHECHBOXRADIO") {
        return (
            <>
                <input
                    type={control.inputType}
                    id={control.inputControlID}
                    name={control.groupName}
                    style={control.style}
                    checked={control.isChecked}
                    onChange={handleChange}
                />
                &nbsp;&nbsp;&nbsp;
                <label htmlFor={control.inputControlID}> {control.inputLabel} </label>
            </>
        )
    }
}

export default InputControls2