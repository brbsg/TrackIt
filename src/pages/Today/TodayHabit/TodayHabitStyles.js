import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  padding: 10px;

  background: #ffffff;
  border-radius: 5px;

  div {
    margin: 0;
  }

  p:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #666666;
  }
  p:nth-child(2),
  p:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }
`;

export const CheckBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin: 0;
  width: 69px;
  height: 69px;
  left: 276px;
  top: 190px;

  background: #ebebeb;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
`;
