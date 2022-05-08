import React from "react";
import { useForm } from "../../hook/useForm";
import { useHistory, useNavigate } from "react-router-dom";
import { Button, InputContainer, ScreenContainer } from "./styled";
import { TextField } from "@material-ui/core";
import back from "../../assets/back.png"
import { addAddress } from "../../hook/useRequestData";
import { goToSignup } from "../../router/coordinator";
import LoadingButton from '@mui/lab/LoadingButton';

export const AddressPage = () => {

    const [form, onChange] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const onSubmitAddress = async (event) => {
        setLoading(true)
        event.preventDefault()
        localStorage.getItem("token")
        await addAddress(form, navigate)
        setLoading(false)
    }
    return (
        <ScreenContainer>
            <h3> <img src={back} alt='navegar' onClick={() => goToSignup(navigate)}></img> Meu endereço</h3>

            <InputContainer>

                <form onSubmit={onSubmitAddress}>
                    <TextField
                        placeholder="Logradouro"
                        name={"street"}
                        onChange={onChange}
                        label={"Logradouro"}
                        variant={'outlined'}
                        value={form.street}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    >
                    </TextField>
                    <TextField
                        placeholder="Número"
                        name={"number"}
                        onChange={onChange}
                        label={"Número"}
                        variant={'outlined'}
                        value={form.number}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    >
                    </TextField>
                    <TextField
                        placeholder="complemento"
                        name={"complement"}
                        onChange={onChange}
                        label={"Cidade"}
                        variant={'outlined'}
                        value={form.complement}
                        fullWidth
                        autoFocus
                        margin="dense"
                    >
                    </TextField>
                    <TextField
                        placeholder="Bairro"
                        name={"neighbourhood"}
                        onChange={onChange}
                        label={"Bairro"}
                        variant={'outlined'}
                        value={form.neighbourhood}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    >
                    </TextField>
                    <TextField
                        placeholder="Cidade"
                        name={"city"}
                        onChange={onChange}
                        label={"Cidade"}
                        variant={'outlined'}
                        value={form.city}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    >
                    </TextField>
                    <TextField
                        placeholder="Estado"
                        name={"state"}
                        onChange={onChange}
                        label={"Estado"}
                        variant={'outlined'}
                        value={form.state}
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                    >
                    </TextField>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Cadastrar
                    </LoadingButton>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}