import React from 'react'

export default function Button(allProps) {
    const { type = "submit", children } = allProps
    return (
        <nu-btn special action={type}>
            {children}
        </nu-btn>
    )
}
