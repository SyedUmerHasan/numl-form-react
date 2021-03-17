import React, { useEffect, useRef } from 'react'

export default function FormCheck(allProps) {
    var { message, name, assertFunction } = allProps
    var ref = useRef(null)

    useEffect(() => {
		ref.current.assert = assertFunction;
		return 0
	}, [])

    return (
        <>
            <nu-check for={name} ref={ref} color="hue(1)">
                {message}
            </nu-check>
        </>
    )
}
