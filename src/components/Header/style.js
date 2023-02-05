import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .user-info {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
