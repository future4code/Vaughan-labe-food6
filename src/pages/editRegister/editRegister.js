import React from "react";
import back from "../../assets/back.png"
import { P } from "./styled";
import { Button, InputContainer, ScreenContainer } from "./styled";
import { TextField } from "@material-ui/core";
import { useHistory, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { editRegister } from "../../hook/useRequestData";
import { goToProfilePage } from "../../router/coordinator";
import LoadingButton from '@mui/lab/LoadingButton';

export const EditRegister = () => {
    const [form, onChange] = useForm({ name: "", email: "", cpf: "" })
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const onSubmitEditRegister = async (event) => {
        setLoading(true);
        event.preventDefault()
        await editRegister(form, navigate)
        setLoading(false);
    }

    return (
        <ScreenContainer>
            <InputContainer>
                <P> <img src={back} alt='imagem-navegar' onClick={() => goToProfilePage(navigate)}></img> Editar Cadastro</P>

                <form onSubmit={onSubmitEditRegister} autoComplete="on">

                    <TextField
                        placeholder="Name"
                        name={"name"}
                        onChange={onChange}
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
                        variant={'outlined'}
                        value={form.cpf}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    ></TextField>
                    <p>*Favor preencher todos os campos</p>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Atualizar
                    </LoadingButton>
                </form>
            </InputContainer>
        </ScreenContainer>
    )

}   