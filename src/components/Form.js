import React, { useState } from 'react';
import FormField from './FormField';

export default function Form(allProps) {
    let { checked } = allProps;
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    function updateData(fieldEntry) {
        console.log("fieldEntry", fieldEntry)
        switch (fieldEntry.name) {
            case 'full-name':
                setFullName(fieldEntry.value)
                break;
            case 'email-address':
                setEmailAddress(fieldEntry.value)
                break;
            case 'password':
                setPassword(fieldEntry.value)
                break;
        }
    }
    function umer() {
        console.log("fullName " + fullName)
        console.log("emailAddress " + emailAddress)
        console.log("password " + password)
    }

    return (
        <>
            {/* <nu-form>
                <FormField label="Full Name" name="full-name" onInput={updateData}></FormField>
                <FormField label="Email Address" name="email-address" onInput={updateData}></FormField>
                <FormField label="Password" name="password" onInput={updateData}></FormField>
                <button onClick={umer}>Test</button>
            </nu-form> */}

            <nu-form>
                <nu-field>
                    <nu-label for="email">Email</nu-label>
                    <nu-input id="email"></nu-input>
                    <nu-check for="email" assert="required" color="hue(1)">
                        Email is required
                    </nu-check>
                    <nu-check for="email" assert="email" color="hue(1)">
                        A valid email address is required
                    </nu-check>
                </nu-field>
                <nu-field>
                    <nu-label for="password">Password</nu-label>
                    <nu-input id="password"></nu-input>
                    <nu-check for="password" assert="required" color="hue(1)">
                        Password is required
                    </nu-check>
                    <nu-check for="password" assert="minlength:8" color="hue(1)">
                        Password should be at least 8 characters long
                    </nu-check>
                </nu-field>
                <nu-btn action="submit">Submit</nu-btn>
            </nu-form>
        </>
    );
}