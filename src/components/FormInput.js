import React, { useEffect, useRef, useState } from 'react'
import { assertions } from '../Helpers/assertions'
export default function FormInput(allProps) {
    let { onInput, name, assert } = allProps;
    let inputValue ="";
    const ref = useRef();
    const newref = useRef();
    var firstRun = false;

    var assertionEvents = assertions;

    assertionEvents = assertionEvents.filter((x) => {
        return (x.name == assert)
    })

    useEffect(() => {

        ref.current.addEventListener('input', (evt) => {
            /** Saves input value in a temp variable */
            inputValue = evt.detail 
            /** loopsback the data in the upper component onChange Event */
            onInput(inputValue)
        });

        ref.current.addEventListener('focusout', (evt) => {
            /** Assertion will only run for those, in which it is defined */
            if (assert) {
                assertionEvents.map((eachEvent) => {
                    if (inputValue) {
                        /** Sets check message for the first time only */
                        if (!firstRun) {
                            newref.current.innerHTML = eachEvent.message
                            firstRun = true;
                        }
                        /** Runs the function and returns the status, whether regex is asserted or not */
                        var a = !eachEvent.function(inputValue)
                        if (a) {
                            /** If regex says its true then show the data */
                            /** doing opacity is not a good way to do this, for doing it a hacky way, I have done this way */
                            newref.current.style.opacity = 1;
                            return 0
                        }
                    }
                    newref.current.style.opacity = 0;
                    return 0
                });
            }
        });

    }, []);

    return (
        <>
            <nu-input ref={ref} id={name}></nu-input>
            <nu-check ref={newref} color="hue(1)"></nu-check>
        </>
    )
}
