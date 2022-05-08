import React from "react"
import {  CaixaTexto } from "../../pages/HomePage/styled";
export const Filter = (props) => {
    const onChangeSearchRestaurant = (event) => {
        props.setSearchRestaurant(event.target.value)
    }
    return (
            <CaixaTexto
                type={'text'}
                value={props.searchRestaurant}
                onChange={onChangeSearchRestaurant}
                placeholder="Restaurante"
            >
            </CaixaTexto>
    )
}