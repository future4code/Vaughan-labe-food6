import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Navigate, useNavigate } from 'react-router-dom';
import { goToHomePage, goToCartPage, goToProfilePage } from '../router/coordinator';
import styled from 'styled-components';
import homepage2x from '../assets/icons8-casinha-de-cachorro-54.png'
import shoppingcart2x from '../assets/shoppingcart2x.png'
import avatar from '../assets/avatar.png'

export const ImgFooter = styled.img`
width: 27px;
  height: 30px;
  object-fit: contain;
  /* background-color: #B8B8B8; */  
  align-items: center;
`

export const Footerbarr = styled.div`
 display: flex;
 justify-content: center;
  position: fixed;
  margin-top: 20px;
    background-color: #ffff;
  border-top:1px solid grey ;
    width: 100%;
     height: 70px;
    text-align: center;
    align-items: center;
   justify-items: center;
  bottom: 0;
`

export const Footer = (props) => {
  const [value, setValue] = React.useState(props.tela);

  const navigate = useNavigate()

  return (

    <Footerbarr>
      <BottomNavigation sx={{ width: 500 }} value={value} position='fixed'
        onChange={(event, newValue) => setValue(newValue)}>

        <BottomNavigationAction
          label="Home"
          icon={<ImgFooter src={homepage2x}></ImgFooter>}
          onClick={() => navigate('/home')}
        />
        <BottomNavigationAction
          label="Carrinho"
          icon={<ImgFooter src={shoppingcart2x}></ImgFooter>}
          onClick={() => navigate('/cart')}
        />
        <BottomNavigationAction
          label="Perfil"
          icon={<ImgFooter src={avatar}></ImgFooter>}
          onClick={() => navigate('/profile')}
        />
      </BottomNavigation>
    </Footerbarr>
  );
}
