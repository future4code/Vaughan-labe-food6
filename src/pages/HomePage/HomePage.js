import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import { Card, Buscar, Div, Img, ImgSearch, Name, P, Rectangle, Rectangle2, Home, Container, ImageSIZE, OrangeName, ContainerLogo } from "./styled";
import { useEffect, useState } from "react";
import search from "../../assets/search.png"
import { useProtectedPage } from "../../hook/useProtectPage";
import { goToDetails } from "../../router/coordinator";
import { useHistory, useNavigate } from "react-router-dom";
import { Filter } from "../../components/filter/Filter";
import { Footer } from "../../components/Footer";
import  logo  from '../../assets/logo-future-eats-invert.png'


export const HomePage = () => {
    useProtectedPage()
    const [posts, setPosts] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("")
    const [searchfilter, setSearchfilter] = useState(false)
    const navigate = useNavigate()

    const listarRestaurantes = () => {
        const token = localStorage.getItem("token")


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
            <a onClick={() => onClickCard(post.id)}><ImageSIZE><Img src={post.logoUrl}></Img></ImageSIZE></a>
            <Buscar>
            <OrangeName>{post.name}</OrangeName>
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

        <Home>
             <ContainerLogo><P src={logo} alt='Rappi4' /></ContainerLogo>
            <hr></hr>
            <Buscar>
                <Container>
                    <ImgSearch src={search}></ImgSearch>
                    <Filter
                        cards={cardsRestaurantes}
                        setSearchRestaurant={setSearchRestaurant}
                        searchRestaurant={searchRestaurant}
                    ></Filter>
                </Container>
            </Buscar>

            <Rectangle2>
                {cardsRestaurantes}
            </Rectangle2>

            <Footer tela={0}/>
        </Home>
    )
}

