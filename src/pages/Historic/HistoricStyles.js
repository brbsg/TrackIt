import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  padding: 77px 0px;

  background-color: #f2f2f2;

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0;

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */

    color: #126ba5;
  }
  div:nth-child(3) {
    width: 100%;

    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;

export const Header = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  gap: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    margin: 0 20px;
    object-fit: cover;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #ffffff;

  button:first-child {
    margin: 0;
    border: 0;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
  button:last-child {
    margin: 0;
    border: 0;
    background-color: transparent;

    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
`;

export const TodayButton = styled.button`
  margin: 0;
  border: 0;
  width: 91px;
  height: 91px;
  border-radius: 100%;
  margin-bottom: 35px;
  background-color: #52b6ff;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    border-radius: 100%;
    height: 91px;

    position: absolute;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #ffffff;
  }
`;
