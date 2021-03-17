import React from 'react'

export default function FormLabel(allProps) {
    let { label, name } = allProps;
    return (
        <nu-label for={name}>{label}</nu-label>
    )
}
