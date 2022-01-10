import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91px;
  padding: 20px;

  background: #ffffff;
  border-radius: 5px;

  div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  div:last-child {
    width: 100%;
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
