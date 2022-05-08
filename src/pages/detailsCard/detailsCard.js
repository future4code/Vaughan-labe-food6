import React, { useContext, useState } from "react";
import useRequestData, { getDetails } from "../../hook/useRequestData";
import { useEffect } from "react";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import {  ButtonADD, Card, Card2, ContainerBTT, ContainerInfo, Conteiner, Conteiner2, Description, Div, Div2, DivImage, HeaderCard, Img, Img2, Itens, Name, Name2, P, Price, Produto, ProdutoIMG, Rectangle3 } from "./styled";
import { goToHomePage } from "../../router/coordinator";
import back from "../../assets/back.png"
import { GlobalStateContext } from "../../global/globalStateContext";
import { TransitionsModal } from '../../components/modal'
import { Button } from "@mui/material";

export const DetailsPage = (id) => {


    const {cart, setCart} = useContext(GlobalStateContext)
    const params = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    
    const [ carrinho, setcarrinho ] = useState(undefined)
    const [num, setNum] = React.useState(0)

    const onChangeModal = (e) => {

        setNum(e.target.value)

    }

    
    
    const addToCart = (product) => {
        const productOnCart = cart.find(produto => product.id === produto.id)
        if(productOnCart) {
            for (let i = 0; i < cart.length; i++) {
                if(cart[i].id === productOnCart.id) {
                    const attobj = {...cart[i], quantidade: productOnCart.quantidade + Number(num)}
                    const oldCart = [...cart]
                    const newCart = oldCart.splice(0,cart[i])
                    newCart.push(attobj)
                    
                    setCart(newCart)
                }
            }
            return alert('produto adicionado')
        }
        const obj = [...cart, {...product, quantidade: Number(num)}]
        setCart(obj)
    }

    const getDetails = (id, navigate) => {
        const token = localStorage.getItem("token");

        axios
            .get(`${BASE_URL}/rappi4B/restaurants/${params.id}`,
                {
                    headers: {
                        auth: token
                    }
                })
            .then((response) => {
                setRestaurant(response.data.restaurant)
                setProducts(response.data.restaurant.products)

            })
            .catch((error) => {
                alert(error.response.data.message);
            });

    };
    getDetails()

    const cardsProducts = products.map((product) => {
        return <Card2 key={product.id}>
            <HeaderCard>
                <Produto>
                    <ProdutoIMG src={product.photoUrl}></ProdutoIMG>
                    <ContainerInfo>
                        <Name2>{product.name}</Name2>
                        <Description>{product.description}</Description>
                        <Price> R$: {product.price} reais </Price>
                    </ContainerInfo>

                    <ContainerBTT>
                    </ContainerBTT>
                </Produto>
               
                <TransitionsModal 
                topButton={"Adicionar"}
                textoModal={"Quantidade"}
                input={<input type='number' value={num} onChange={onChangeModal}min="1"></input>}
                botao={
                <Button onClick={() => addToCart(product)} variant="contained" sx={{
                    width: 100,
                    color: 'primary.contrastText',}}>Adicionar</Button>}
                ></TransitionsModal>
            </HeaderCard>
        </Card2>
    })
    
    return (

        <div>
            <P> <img src={back} alt='navegar' onClick={() => goToHomePage(navigate)}></img> Restaurante</P>
            <hr></hr>
            <Conteiner>
                <Card key={restaurant.id}>
                    <DivImage>
                    <Img src={restaurant.logoUrl}></Img>
                    </DivImage>
                    
                    <Name>{restaurant.name}</Name>
                    <Div2>
                        {restaurant.category}
                    </Div2>

                    <Div>
                        {restaurant.deliveryTime} min
                    </Div>
                    <Div>
                        Frete R$: {restaurant.shipping},00
                    </Div>

                    <Div2>
                        {restaurant.address}
                    </Div2>
                </Card>
            </Conteiner>
            <Itens>
                <p>Principais</p>
                <hr></hr>
                {cardsProducts}
            </Itens>

                


        </div>


    )
}