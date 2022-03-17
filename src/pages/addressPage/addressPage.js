import React from "react";
import { useForm } from "../../hook/useForm";
import { useNavigate } from "react-router-dom";
import { InputContainer, ScreenContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import back from "../../assets/back.png"
import { addAddress } from "../../hook/useRequestData";

export const AddressPage = () => {

    const [form, onChange] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const navigate = useNavigate()

    const onSubmitAddress = (event) => {
        event.preventDefault()
        localStorage.getItem("token")
        addAddress(form, navigate)
    }
    return (
        <ScreenContainer>

            <InputContainer>

                <h2> <img src={back} alt='navegar' ></img> Meu endereço</h2>
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
                    <Button
                        variant={'contained'}
                        type={"submit"}
                        fullWidth
                        color={'default'}
                    >
                        Cadastrar</Button>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}