import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  height: 90%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #e8e6e6;
  border-radius: 5px;
`;

export const MenuBar = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;

  button {
    background-color: #dad8d8;
    padding: 5px 12px;
    border-radius: 5px;
  }
`;
