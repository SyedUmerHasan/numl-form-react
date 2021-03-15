import { useCallback } from 'react'
import FormInput from './FormInput';
import FormLabel from './FormLabel';

export default function FormField(allProps) {
    let { label, onInput, name} = allProps;

    const handleChecklistChange = (data) =>{
        onInput({
            name : name,
            value : data
        })
    }

    return (
        <>
            <FormLabel label={label} for={name}></FormLabel>
            <FormInput onInput={handleChecklistChange} name={name}></FormInput>
            
            <nu-btn action="submit">Submit</nu-btn>
        </>
    )
}

