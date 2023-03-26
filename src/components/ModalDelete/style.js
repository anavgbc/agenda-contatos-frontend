import styled from "styled-components";

export const ModalContent = styled.div`
  background-color: #e1e5e7;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: justify;

  h3 {
    margin-bottom: 20px;
  }

  p {
    /* text-align: justify; */
    color: gray;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }
`;

export const ButtonDelete = styled.button`
  width: 35%;
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;

  color: white;
  background-color: rgb(228 70 70);
  font-weight: 500;

  &:hover {
    background-color: rgb(201 62 62);
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  width: 25%;
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  margin-right: 10px;

  color: black;
  background-color: transparent;
  font-weight: 600;

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;
