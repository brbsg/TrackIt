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

  div {
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

export const Title = styled.title`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 18px 0;
  gap: 40%;

  font-style: normal;
  font-weight: normal;
  font-size: 22.976px;
  line-height: 29px;
  /* identical to box height */

  color: #126ba5;
`;

export const AddIcon = styled.button`
  border: 0;
  width: 40px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  background: #52b6ff;
  border-radius: 5px;
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
    height: 91px;
    border-radius: 100%;

    position: absolute;

    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #ffffff;
  }
`;
