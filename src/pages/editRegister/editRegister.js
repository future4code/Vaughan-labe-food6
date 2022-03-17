import React from "react";
import back from "../../assets/back.png"
import { P } from "./styled";
import { InputContainer, ScreenContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { editRegister } from "../../hook/useRequestData";
import { goToProfilePage } from "../../router/coordinator";


export const EditRegister = () => {
    const [form, onChange] = useForm({ name: "" , email: "", cpf: ""})

    const navigate = useNavigate()
    const onSubmitEditRegister = (event) => {
      console.log(event.target)
        event.preventDefault()
        editRegister(form, navigate)
    }

    return (
        <ScreenContainer>
            <InputContainer>
            <P> <img src={back} alt='imagem-navegar'  onClick={() => goToProfilePage(navigate)}></img> Editar Cadastro</P>
            
            <form onSubmit={onSubmitEditRegister}>

                <TextField
                    placeholder="Nome"
                    name={"name"}
                    onChange={onChange}
                    variant={'outlined'}
                    value={form.name}
                    fullWidth
                    autoFocus
                    margin="dense"

                >

                </TextField>


                <TextField
                    placeholder="Email"
                    name={"email"}
                    onChange={onChange}
                    variant={'outlined'}
                    value={form.email}
                    fullWidth
                    autoFocus
                    margin="dense"

                ></TextField>


                <TextField
                    placeholder="CPF"
                    name={"cpf"}
                    onChange={onChange}
                    variant={'outlined'}
                    value={form.cpf}
                    fullWidth
                    autoFocus
                    margin="dense"
                ></TextField>

                <Button
                    variant={'contained'}
                    type={"submit"}
                    fullWidth
                    color={'default'}
                >
                    Salvar</Button>
            </form>
            </InputContainer>
        </ScreenContainer>
    )

}   