import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Profile } from "../../hook/useRequestData";
import { Endereco, P, Rectangle, Rua } from "./styled";
import edit from "../../assets/edit.png"

export const ProfilePage = () => {

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
                console.log(response.data)
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
            <img src={edit}></img>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
            <Rectangle>
            <img src={edit}></img>
                <Endereco>Endereço cadastrado</Endereco>
                <Rua>{profile.address}</Rua>
            </Rectangle>
        </div>
    )
}