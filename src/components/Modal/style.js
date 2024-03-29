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

    #contact--number {
      margin: 20px 0px 0px 2px;
      width: 85%;
      /* margin-left: 20px; */

      input {
        padding: 12px;
        width: 50%;
        margin-top: 10px;
        border-radius: 5px;
        background-color: rgba(156, 153, 255, 0.06);
      }
    }

    .number--input {
    }

    .contact-name {
      width: 90%;
      display: flex;
      flex-direction: row;

      margin-top: 15px;
    }

    #upload-image {
      width: 90%;
      display: flex;
      flex-direction: column;
    }
  }

  svg {
    color: #9c99ff;
  }

  input {
    margin-left: 10px;

    /* &:focus::placeholder {
      color: transparent;
      transition: 0.2s;
    } */
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
