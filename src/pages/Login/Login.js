import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../context/User";

import {
  Container,
  LogoImg,
  Input,
  LoginButton,
  RegisterButton,
} from "./LoginStyles";

import logoImg from "../../assets/Group 8.png";
import Loading from "../../components/Loading";

export default function Login() {
  const navigate = useNavigate();

  const [load, setLoad] = useState(false);

  const { user, setUser } = useUser();

  const handleLoginButton = () => {
    setLoad(true);

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        { email: user.email, password: user.password }
      )
      .then((response) => {
        setUser(response.data);
        navigate("/hoje");
      })
      .catch(() => {
        alert("Dados Inválidos");
        setLoad(false);
      });
  };

  return (
    <Container>
      <LogoImg src={logoImg} alt="" />
      <Input
        disabled={load}
        placeholder="email"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <Input
        disabled={load}
        placeholder="senha"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />

      <LoginButton onClick={handleLoginButton}>
        {!load && "Entrar"}
        {load && <Loading />}
      </LoginButton>
      <RegisterButton onClick={() => navigate("/cadastro")}>
        Não tem uma conta? Cadastre-se!
      </RegisterButton>
    </Container>
  );
}
