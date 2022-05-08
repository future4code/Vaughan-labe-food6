import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { SignUp } from "../../hook/useRequestData";
import { Button, InputContainer, LogoImage, ScreenContainer } from "./styled";

import logo1 from "../../assets/logo1.png"
import { LoadingButton } from "@mui/lab";


export const SignUpPage = () => {
    const [form, onChange] = useForm({ name: "", email: "", cpf: "", password: "" })
    const navigate = useNavigate()
    const [confirmPassword, setconfirmPassword] = useState("")
    const [loading, setLoading] = React.useState(false);


    const onSubmitForm = async (event) => {
        setLoading(true)
        event.preventDefault()
        localStorage.getItem("token")
        if (form.password === confirmPassword) {
            await SignUp(form, navigate)
            setLoading(false)
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

                <LogoImage src={logo1} />
                <h3>Cadastrar</h3>
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


                    <LoadingButton
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Criar
                    </LoadingButton>



                </form>

            </InputContainer>
        </ScreenContainer>
    )
}