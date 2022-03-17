import React, { useState } from "react";
import useRequestData, { getDetails } from "../../hook/useRequestData";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { Buscar, Card, Card2, Conteiner, Conteiner2, Description, Div, Div2, Img, Img2, Name, Name2, P, Price, Rectangle3 } from "./styled";
import { goToHomePage } from "../../router/coordinator";
import back from "../../assets/back.png"

export const DetailsPage = (id) => {
    const params = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const getDetails = (id, navigate) => {
        const token = localStorage.getItem("tokenaddress");
        console.log(params.id)
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
                console.log(response.data.restaurant)
            })
            .catch((error) => {
                alert(error.response.data.message);
            });

    };

    useEffect(() => {
        getDetails()
    }, [])
   
    const cardsProducts = products.map((product) => {
        return <Card2 key={product.id}>
            <Rectangle3>
                <Img2 src={product.photoUrl}></Img2>
                <Name2>{product.name}</Name2>
                <Description>{product.description}</Description>
                <Price> R$: {product.price},00  <button>Adicionar</button></Price>
               
            </Rectangle3>
           
        </Card2>
    })

    return (

        <div>
            <P> <img src={back} alt='navegar' onClick={() => goToHomePage(navigate)}></img> Restaurante</P>
            <hr></hr>
            <Conteiner>
                <Card key={restaurant.id}>
                    <Img src={restaurant.logoUrl}></Img>
                    <Name>{restaurant.name}</Name>
                    <Div2>
                        {restaurant.category}
                    </Div2>
                    <Buscar>

                        <Div>
                            {restaurant.deliveryTime} min
                        </Div>
                        <Div>
                            Frete R$: {restaurant.shipping},00
                        </Div>

                    </Buscar>
                    <Div2>
                        {restaurant.address}
                    </Div2>
                </Card>
            </Conteiner>
            <p>Principais</p>
            <hr></hr>
            {cardsProducts}

        </div>


    )
}