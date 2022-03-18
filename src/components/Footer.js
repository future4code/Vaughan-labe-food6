import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import  avatar  from "../assets/avatar.png"
import { goToCartPage, goToHomePage, goToProfilePage } from "../router/coordinator";
import homepage2x from "../assets/homepage2x.png"
import shoppingcart2x from "../assets/shoppingcart2x.png"


export const Footerbarr = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
    bottom: 0;
    background-color: #ffff;
 border-top:1px solid grey ;
    width: 100%;
     height: 8vh;
    text-align: center;
    align-items: center;
   justify-items: center;

`;

export const ImgFooter = styled.img`
width: 27px;
  height: 30px;
  object-fit: contain;
  /* background-color: #B8B8B8; */  
  align-items: center;
 
 
`;
export const DivImage = styled.div`
 width: 26.1px;
  height: 13.5px;
  /* background-color: #b8b8b8; */
  align-items: center;
`;

export const Footer = () => {
    const navigate = useNavigate()
    return (
        <Footerbarr>
            <ImgFooter src={homepage2x}
               onClick={() => goToHomePage(navigate)}  
            ></ImgFooter>

            <ImgFooter src={shoppingcart2x}
             onClick={() => goToCartPage(navigate)}  
            ></ImgFooter>

            <ImgFooter src={avatar}
             onClick={() => goToProfilePage(navigate)}  
            ></ImgFooter>


        </Footerbarr>


    )



}