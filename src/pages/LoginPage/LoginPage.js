import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputContainer, LogoImage, ScreenContainer } from "./Styled";
import logo1 from "../../assets/logo1.png";
import { useForm } from "../../hook/useForm";

export const LoginPage = () => {
  const [form, onChange] = useForm({ email: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
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
            Criar
          </Button>
        </form>
      </InputContainer>
    </ScreenContainer>
  );
};
