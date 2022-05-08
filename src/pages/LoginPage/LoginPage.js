import { TextField } from "@material-ui/core";
import React from "react";
import { Button, Clique, InputContainer, LogoImage, ScreenContainer } from "./Styled";
import logo1 from "../../assets/logo1.png";
import { useForm } from "../../hook/useForm";
import { useHistory, useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import { goToSignup } from "../../router/coordinator"
import LoadingButton from '@mui/lab/LoadingButton';

export const LoginPage = () => {
  const [form, onChange] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    await login(form, navigate); 
    setLoading(false);
  }

  return (
    <ScreenContainer>
      <InputContainer>
        <LogoImage src={logo1} />
        <form onSubmit={onSubmit}>
          <TextField
            placeholder="Email"
            name={"email"}
            onChange={onChange}
            label={"email"}
            variant={"outlined"}
            value={form.email}
            fullWidth
            required
            autoFocus
            margin="dense"
          />

          <TextField
            placeholder="Senha"
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            value={form.password}
            fullWidth
            required
            autoFocus
            margin="dense"
            id="senha"
            type={"password"}
          />
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            variant="contained"
            fullWidth
            type="submit"
          >
            Entrar
          </LoadingButton>

          <p>Não possui cadastro? <Clique onClick={() => goToSignup(navigate)}> <b>Clique aqui.</b></Clique> </p>

        </form>
      </InputContainer>
    </ScreenContainer >
  );
};
