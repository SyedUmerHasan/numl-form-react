import React, { useState } from 'react';
import FormField from './FormField';

export default function Form(allProps) {
    let { checked } = allProps;
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    function updateData(fieldEntry){
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
    function umer(){
        console.log("fullName " + fullName)
        console.log("emailAddress " + emailAddress)
        console.log("password " + password)
    }

    return (
        <>
        <nu-form>
            <FormField label="Full Name" name="full-name" onInput={updateData} assert="alphabets"></FormField>
            <FormField label="Email Address" name="email-address" onInput={updateData}></FormField>
            <FormField label="Password" name="password" onInput={updateData}></FormField>
            <nu-btn action="submit">Submit</nu-btn>
            <br/>
            <button onClick={umer}>Check States in console</button>
        </nu-form>
        
        </>
    );
}