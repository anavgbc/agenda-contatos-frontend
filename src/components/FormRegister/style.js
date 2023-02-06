import styled from "styled-components";

export const FormContainer = styled.form`
  width: 80%;
  background-color: #e8e6e6;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 900px) {
    width: 25%;
  }

  span,
  button {
    margin: 20px 0px;
  }
`;

export const Input = styled.div`
  width: 80%;
  background-color: blue;
  border-radius: 5px;
  padding: 10px;
`;
