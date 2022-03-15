import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import useRequestData, { SignUp } from "../../hook/useRequestData";
import { InputContainer, LogoImage, ScreenContainer } from "./styled";
import { BASE_URL } from "../../constants/urls"
import logo1 from "../../assets/logo1.png"
// let senha = document.getElementById('senha');
// let senhaC = document.getElementById('senhaC');

// function validarSenha() {
//   if (senha.value != senhaC.value) {
//     senhaC.setCustomValidity("Senhas diferentes!");
//     senhaC.reportValidity();
//     return false;
//   } else {
//     senhaC.setCustomValidity("");
//     return true;
//   }
// }


export const SignUpPage = () => {
    const [form, onChange] = useForm({ name: "", email: "", cpf: "", password: "" })
    const navigate = useNavigate()
    const onSubmitForm = (event) => {
        // console.log(event)
        SignUp(form)
        event.preventDefault()

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
                        margin="dense"                        id="senha"
                        type={"password"}
                    ></TextField>

                    <TextField
                        placeholder="Confirmar Senha"
                        name={"password"}
                        onChange={onChange}
                        label={"Confirmar Senha"}
                        variant={'outlined'}
                        value={form.password}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                        id="senhaC"
                        type={"password"}
                    ></TextField>


                    <Button
                        variant={'contained'}
                        type="submit"
                        fullWidth
                        color={'default'}
                    >
                        Criar</Button>

                        
                    
                </form>

            </InputContainer>
        </ScreenContainer>
    )
}