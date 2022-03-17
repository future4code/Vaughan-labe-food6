import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { Card, Buscar, Div, Img, ImgSearch, Name, P, Rectangle, Rectangle2 } from "./styled";
import { useEffect, useState } from "react";
import search from "../../assets/search.png"
import { useProtectedPage } from "../../hook/useProtectPage";


export const HomePage = () => {
    useProtectedPage()
    const [posts, setPosts] = useState([]);

    const listarRestaurantes = () => {
        const token = localStorage.getItem("tokenaddress")
        console.log(token)
       
        axios
        .get(`${BASE_URL}/rappi4B/restaurants`,
                {
                    headers: {
                        auth: token
                    }
                })
        .then((resposta) => {
            setPosts(resposta.data.restaurants)
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    }
    useEffect(() => {
        listarRestaurantes()
    }, []);

    const cardsRestaurantes = posts.map((post) => {
        return <Card key={post.id}>
            <Img src={post.logoUrl}></Img>
            <Name>{post.name}</Name>
            <Buscar>
                <Div>
                    {post.deliveryTime} min
                </Div>
                <Div>
                    Frete R$: {post.shipping},00
                </Div>
            </Buscar>
        </Card>
    })
    return (

        <div>
            <P>Rappi4</P>
            <hr></hr>
            <Buscar>
                <ImgSearch src={search}></ImgSearch>
                <Rectangle

                    placeholder="Restaurante"
                >

                </Rectangle>

            </Buscar>

            <Rectangle2>
                {cardsRestaurantes}
            </Rectangle2>
        </div>
    )
}

