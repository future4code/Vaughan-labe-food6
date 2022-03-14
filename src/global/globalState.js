import { GlobalStateContext } from "./globalStateContext"
import { useState } from "react"
import React from 'react';

const GlobalState = (props) => {
    const [cart, setCart] = useState('testando estado global')
    const [ teste, setTest ] = useState('outro estado')
    
    return (
        <GlobalStateContext.Provider value={
            {
                cart, setCart, teste, setTest
            }
        }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState

