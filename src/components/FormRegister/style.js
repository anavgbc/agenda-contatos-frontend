import styled from "styled-components";

export const FormContainer = styled.form`
  width: 80%;
  background-color: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #user--number {
    margin-bottom: 0px;
    width: 80%;

    .PhoneInputInput {
      margin-top: 20px;
      padding: 10px;
      border-radius: 5px;
    }

    .PhoneInputCountryIcon--square {
      height: 100%;
    }
  }

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
  a {
    font-weight: 500;
    color: #3d40d3;
  }

  a:hover {
    text-decoration: underline;
    color: #6b6eea;
  }
`;

export const Input = styled.div`
  width: 80%;
  background-color: blue;
  border-radius: 5px;
  padding: 10px;
`;
