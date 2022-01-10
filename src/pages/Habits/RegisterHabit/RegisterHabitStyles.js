import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;

  padding: 20px;

  input {
    width: 100%;
    height: 45px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #dbdbdb;
  }

  .selected {
    background: #cfcfcf;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    border-radius: 5px;

    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const WeekDay = styled.button`
  width: 30px;
  height: 30px;

  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0;
  margin-left: 3px;

  font-style: normal;
  font-weight: normal;
  font-size: 19.976px;
  line-height: 25px;

  color: #dbdbdb;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  height: 100%;

  button:nth-child(1) {
    border: 0;
    margin: 0;
    width: 84px;
    height: 35px;
    background-color: transparent;
    border-radius: 4.63636px;

    font-style: normal;
    font-weight: normal;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;

    color: #52b6ff;
  }
  button:nth-child(2) {
    margin: 0;
    border: 0;

    width: 84px;
    height: 35px;

    background: #52b6ff;
    border-radius: 4.63636px;

    font-style: normal;
    font-weight: normal;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;
