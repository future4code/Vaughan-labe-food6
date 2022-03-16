import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputContainer, LogoImage, ScreenContainer } from "./Styled";
import logo1 from "../../assets/logo1.png"
import { useForm } from "../../hook/useForm";

export const LoginPage = () => {
    const [form, onChange] = useForm({ name: "", email: ""})

    
    return (

        <ScreenContainer>
            <InputContainer>
                <h2>Entrar</h2>
                <LogoImage src={logo1} />
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
                    label={"E-mail"}
                    variant={'outlined'}
                    value={form.email}
                    fullWidth
                    required
                    autoFocus
                    margin="dense"

                ></TextField>


                <Button
                    variant={'contained'}
                    onClick={() => alert("Usuario logou")}
                    fullWidth
                    color={'default'}
                >
                    Entrar</Button>
                    Nao tem uma conta ? <a href="/signup">Cadastre-se</a>
            </InputContainer>
        </ScreenContainer>

    )
}