import React from 'react';
import { InputText } from 'primereact/inputtext';
import ProviderPrimeReact from '../Main/Provider/ProviderPrimeReact'

export default function HelpTextDemo() {
    return (
        <ProviderPrimeReact>
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>

                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>
        </ProviderPrimeReact>
    );
}
