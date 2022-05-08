import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Container, Endereco, P, Rectangle, Rua } from "./styled";
import edit from "../../assets/edit.png"
import { goToEditAddress, goToEditRegister } from "../../router/coordinator";
import { useHistory, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";

export const ProfilePage = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState({})
    const Profile = () => {
        const token = localStorage.getItem("token");
        
        axios
            .get(`${BASE_URL}/rappi4B/profile`,
                {
                    headers: {
                        auth: token
                    }
                })
            .then((response) => {

                setProfile(response.data.user)
            })
            .catch((error) => {
                console.log(error.message);
            });


    };

    useEffect(() => {
        Profile()
    }, [])

    return (
        <div>
            <P>Meu Perfil</P>
            <hr></hr>
            <Container>
            <Rectangle>
            <img src={edit} alt='navegar' onClick={() => goToEditRegister(navigate)}></img>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
            </Rectangle>

            <Rectangle>
            <img src={edit} alt='navegar' onClick={() => goToEditAddress(navigate)}></img>
                <Endereco>Endereço cadastrado</Endereco>
                <Rua>{profile.address}</Rua>
            </Rectangle>
            </Container>
            <Footer tela={2} />
        </div>
    )
}