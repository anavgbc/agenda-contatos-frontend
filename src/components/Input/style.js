import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 10px;
  border: 1px solid transparent;

  .error--name {
    font-size: 12px;
    margin-left: 5px;
    color: rgba(194, 70, 70, 0.71);
  }

  .error {
    border: 1px solid rgba(194, 70, 70, 0.71);
    box-shadow: -1px 2px 11px -4px rgba(194, 70, 70, 0.71);

    svg {
      color: red;
    }
  }
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

    &:focus::placeholder {
      color: transparent;
      transition: 0.2s;
    }
  }
`;
