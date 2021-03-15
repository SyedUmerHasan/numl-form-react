import React, { useEffect, useRef } from 'react'
import { assertions } from '../Helpers/assertions'
export default function FormInput(allProps) {
    let { onInput, name, assert } = allProps;
    const ref = useRef();
    const newref = useRef();
    var firstRun = false;

    var assertionEvents = assertions;

    assertionEvents = assertionEvents.filter((x)=>{
        return (x.name != assert)
    })

    useEffect(() => {

        ref.current.addEventListener('input', (evt) => {
            assertionEvents.map((eachEvent)=>{
                if(evt.detail){
                    if(!firstRun){
                        newref.current.innerHTML = eachEvent.message
                        firstRun =  true;
                    }    
                    var a = !!eachEvent.function(evt.detail)
                    if(a){
                        newref.current.style.opacity = 1;
                        return 0
                    }
                }
                newref.current.style.opacity = 0;
                return 0
            })
            onInput(evt.detail)
        });
    }, []);

    return (
        <>
            <nu-label for={name}>{name}</nu-label>
            <nu-input ref={ref} id={name}></nu-input>
            <nu-check ref={newref} color="hue(1)">
                Email is required
            </nu-check>
        </>
    )
}
