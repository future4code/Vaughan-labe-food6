import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { SignUp } from "../../hook/useRequestData";
import { InputContainer, LogoImage, ScreenContainer } from "./styled";

import logo1 from "../../assets/logo1.png"


export const SignUpPage = () => {
    const [form, onChange] = useForm({ name: "", email: "", cpf: "", password: "" })
    const navigate = useNavigate()
    const [confirmPassword, setconfirmPassword] = useState("")

    const onSubmitForm = (event) => {
        event.preventDefault()
        localStorage.getItem("token")
        if (form.password === confirmPassword) {
            SignUp(form, navigate)
          
        }
        else
        alert("Senhas diferentes")
         
    }

    const onChangeConfirmPassword = (event) => {
        setconfirmPassword(event.target.value)

    }

    return (

        <ScreenContainer>
            <InputContainer>
                <h2>Cadastre sua conta</h2>
                <LogoImage src={logo1} />
                <form onSubmit={onSubmitForm}>

                    <TextField
                        placeholder="Nome"
                        name={"name"}
                        onChange={onChange}
                        label={"Nome"}
                        variant={'outlined'}
                        value={form.name}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"

                    >

                    </TextField>


                    <TextField
                        placeholder="Email"
                        name={"email"}
                        onChange={onChange}
                        label={"email"}
                        variant={'outlined'}
                        value={form.email}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"

                    ></TextField>


                    <TextField
                        placeholder="CPF"
                        name={"cpf"}
                        onChange={onChange}
                        label={"CPF"}
                        variant={'outlined'}
                        value={form.cpf}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    ></TextField>


                    <TextField
                        placeholder="Senha"
                        name={"password"}
                        onChange={onChange}
                        label={"Senha"}
                        variant={'outlined'}
                        value={form.password}
                        fullWidth
                        required
                        autoFocus
                        margin="dense" id="senha"
                        type={"password"}
                    ></TextField>

                    <TextField
                        placeholder="Confirmar Senha"
                        name={"password"}
                        onChange={onChangeConfirmPassword}
                        label={"Confirmar Senha"}
                        variant={'outlined'}
                        value={confirmPassword}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                        id="senhaC"
                        type={"password"}
                    ></TextField>


                    <Button
                        variant={'contained'}
                        type={"submit"}
                        fullWidth
                        color={'default'}
                    >
                        Criar</Button>



                </form>

            </InputContainer>
        </ScreenContainer>
    )
}