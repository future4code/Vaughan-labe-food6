import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { Card, Buscar, Div, Img, ImgSearch, Name, P, Rectangle, Rectangle2 } from "./styled";
import { useEffect, useState } from "react";
import search from "../../assets/search.png"
import { useProtectedPage } from "../../hook/useProtectPage";
import { goToDetails } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { Filter } from "../../components/filter/Filter";

export const HomePage = () => {
    useProtectedPage()
    const [posts, setPosts] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("")
    const [searchfilter, setSearchfilter] = useState(false)
    const navigate = useNavigate()

    const listarRestaurantes = () => {
        const token = localStorage.getItem("tokenaddress")
    
       
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
    const onClickCard = (id) => {

        goToDetails(navigate, id)
      }
    const filteredPosts = posts.filter((post) => {
        if (!searchRestaurant) {
            return true
        }
        if (searchfilter) {
            return false
        }
        return post.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    })
    const cardsRestaurantes = filteredPosts.map((post) => {
        return <Card key={post.id}>
            <a onClick={()=> onClickCard(post.id)}><Img src={post.logoUrl}></Img></a>
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
                <Filter
                    cards={cardsRestaurantes}
                    setSearchRestaurant={setSearchRestaurant}
                    searchRestaurant={searchRestaurant}
                />
            </Buscar>

            <Rectangle2>
                {cardsRestaurantes}
            </Rectangle2>
        </div>
    )
}

