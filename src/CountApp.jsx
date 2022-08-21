import { useState } from 'react'
import PropTypes from 'prop-types'

export const CountApp=({ value })=>{
    const [ counter,setCounter ]= useState(value);
    
    const handleAdd=()=>{
        setCounter(counter+1);
    }

    const decremetar=()=>{
        setCounter(counter-1);
    }

    const reset=()=>{
        setCounter(value);
    }
    
    return(
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={decremetar}>
                -1
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </>
    )
}

CountApp.prototypes={
    value:PropTypes.number.isRequired
}