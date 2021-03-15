import React, { useEffect, useRef } from 'react'

export default function FormInput(allProps) {
    let { onInput, name } = allProps;
    const ref = useRef();

    useEffect(() => {
        console.log("useEffect");
        ref.current.addEventListener('input', (evt) => onInput(evt.detail));
    }, []);

    return (
        <>
            <nu-input ref={ref} id={name}></nu-input>
            <nu-check for={name} assert="required" color="hue(1)">
            Email is required
            </nu-check>
            <nu-check for={name} assert="email" color="hue(1)">
            A valid email address is required
            </nu-check>
        </>
    )
}
