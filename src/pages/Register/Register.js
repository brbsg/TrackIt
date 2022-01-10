import React, { useState } from "react";

import {
  Container,
  LogoImg,
  Input,
  RegisterButton,
  GoLoginButton,
} from "./RegisterStyles";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import logoImg from "../../assets/Group 8.png";

export default function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  const handleRegisterButton = () => {
    if (
      userData.email !== 0 &&
      userData.password !== "" &&
      userData.name !== "" &&
      userData.image !== ""
    ) {
      axios
        .post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
          userData
        )
        .then((e) => navigate("/"))
        .catch((e) => alert("Preencha os Dados Corretamente"));
    } else alert("Preencha os Dados Corretamente");
  };

  return (
    <Container>
      <LogoImg src={logoImg} alt="" />

      <Input
        placeholder="email"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <Input
        placeholder="senha"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <Input
        placeholder="nome"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <Input
        placeholder="foto"
        onChange={(e) => setUserData({ ...userData, image: e.target.value })}
      />

      <RegisterButton onClick={handleRegisterButton}>Cadastrar</RegisterButton>

      <GoLoginButton onClick={() => navigate("/")}>
        Já tem uma conta? Faça login!
      </GoLoginButton>
    </Container>
  );
}
