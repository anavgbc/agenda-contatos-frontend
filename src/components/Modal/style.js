import styled from "styled-components";

export const ModalContent = styled.div`
  background-color: #e1e5e7;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: #9c99ff;
  }

  input {
    margin-left: 10px;

    &:focus::placeholder {
      color: transparent;
      transition: 0.2s;
    }
  }
`;

export const ButtonAdd = styled.button`
  width: 30%;
  display: flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-top: 30px;

  color: white;
  background-color: #8a86ff;
  font-weight: 500;

  &:hover {
    background-color: #7e7aef;
    cursor: pointer;
  }
`;
