import React from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/globalStateContext";

export const HomePage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)
    
    return (

        <div>
            HomePage
            <button onClick={()=> console.log(cart)} >ver estado</button>

        </div>
    )
}

