import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputContainer, LogoImage, ScreenContainer } from "./Styled";
import logo1 from "../../assets/logo1.png";
import { useForm } from "../../hook/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";

export const LoginPage = () => {
  const [form, onChange] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    login(form, navigate);
  };

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

          <Button
            variant={"contained"}
            type={"submit"}
            fullWidth
            color={"default"}
          >
            Login
          </Button>
        </form>
      </InputContainer>
    </ScreenContainer>
  );
};
