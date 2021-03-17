import { useEffect, useRef } from 'react'
import FormCheck from './FormCheck';
import FormInput from './FormInput';
import FormLabel from './FormLabel';

export default function FormField(allProps) {
    let { label, name, assert, message} = allProps;
    console.log(message)

    return (
        <>
            <nu-field>                
                <FormLabel name={name} label={label} ></FormLabel>
                <FormInput grow="1" name={name}></FormInput>
                <FormCheck name={name} message={message} assertFunction={assert} ></FormCheck>
            </nu-field>
        </>
    )
}

