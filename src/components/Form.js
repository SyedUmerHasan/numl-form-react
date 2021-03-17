import React, { useState } from 'react';
import { getAssertFunction, getAssertMessage } from '../Helpers/assertion-helper';
import { AssertionsEnum } from '../Helpers/assertions';
import FormField from './FormField';

export default function Form(allProps) {
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    var dynamicFormArray = [
        {
            name: "fname",
            label: "First Name",
            assertion: AssertionsEnum.Alphabets
        },
        {
            name: "lname",
            label: "Last Name",
            assertion: AssertionsEnum.Alphabets
        },
        {
            name: "username",
            label: "User Name",
            assertion: AssertionsEnum.SpecialCharacters
        },
        {
            name: "email",
            label: "Email Address",
            assertion: AssertionsEnum.Alphabets
        },
        {
            name: "age",
            label: "Age",
            assertion: AssertionsEnum.Number
        },
        {
            name: "blogurl",
            label: "Website / Blog URL",
            assertion: AssertionsEnum.URL
        },
    ]

    return (
        <>
            <nu-flow fill="subtle" padding>
                <nu-attrs
                    for="card"
                    place="space-around"></nu-attrs>

                <nu-card gap>
                    <nu-h3>Login</nu-h3>

                    <nu-form control="output[.value]" gap="1x">
                        {dynamicFormArray.map((eachFormItem) => {
                            return (<FormField
                                label={eachFormItem.label}
                                name={eachFormItem.name}
                                assert={getAssertFunction(eachFormItem.assertion)}
                                message={getAssertMessage(eachFormItem.assertion)}></FormField>)
                        })}
                        <nu-btn special action="submit">Submit</nu-btn>
                        <nu-block overflow="auto" scrollbar width="max 16">
                            <nu-value id="output"></nu-value>
                        </nu-block>
                    </nu-form>
                </nu-card>
            </nu-flow>

        </>
    );
}