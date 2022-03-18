import React from "react";
import {  Rectangle,} from "../pages/HomePage/styled";


export const Filter = (props) => {
    
  

    const onChangeSearchRestaurant = (event) => {
        props.setSearchRestaurant(event.target.value)


    }

    return (
        <div>

            <Rectangle
                type={'text'}
                value={props.searchRestaurant}
                onChange={onChangeSearchRestaurant}
                placeholder="Restaurante"

            >
            </Rectangle>

          
              

          


        </div>
    )
}