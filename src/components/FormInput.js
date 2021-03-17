import React, { useRef } from 'react'
import 'numl';

export default function FormInput(allProps) {
    let { name } = allProps;

    return (
        <>
            <nu-input id={name}></nu-input>
        </>
    )
}
