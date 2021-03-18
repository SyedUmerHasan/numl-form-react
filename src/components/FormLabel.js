import React from 'react'

export default function FormLabel(allProps) {
    let { children, name } = allProps;
    return (
        <nu-label for={name}>{children}</nu-label>
    )
}
