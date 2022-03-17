import React from "react";
import back from "../../assets/back.png"
import {P} from "./styled";
import { InputContainer, ScreenContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import {  addAddress } from "../../hook/useRequestData";
import { goToProfilePage } from "../../router/coordinator";

export const EditAddress = ()=>{
    const [form, onChange] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const navigate = useNavigate()
    const onSubmitEditAddress = (event) => {
          event.preventDefault()
          addAddress(form, navigate)
      }
    return(
        <div>
        <P> <img src={back} onClick={() => goToProfilePage(navigate)}></img> Editar endereço</P>
        <hr></hr>
        <ScreenContainer>

            <InputContainer>

                <form onSubmit={onSubmitEditAddress} >
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
                        required
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
                    <p>*Favor preencher todos os campo</p>
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
        </div>
    )
}