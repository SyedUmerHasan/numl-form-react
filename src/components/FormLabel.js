import React from 'react'

export default function FormLabel(allProps) {
    let { label } = allProps;
    return (
        <nu-label for={label}>{label}</nu-label>
    )
}
