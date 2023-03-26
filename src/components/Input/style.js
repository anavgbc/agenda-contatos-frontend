import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 10px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => (props.grayColor ? "#9c99ff0f;" : "#ffffff")};

  padding-left: 10px;
  margin-top: 10px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.grayColor ? "#9c99ff0f" : "#ffffff")};

    // &:focus {
    //   border: 1px solid red;
    // }
  }
`;
