import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const LogoImg = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
`;

export const LoginButton = styled.button`
  border: 0;
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;

  color: #ffffff;
`;

export const RegisterButton = styled.button`
  border: 0;
  background-color: transparent;
  margin-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;

  color: #52b6ff;
`;
