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
  border-bottom: 1px solid black;
  padding: 0px 20px;
  .logo-header {
    gap: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    @media screen and (max-width: 390px) {
      display: none;
    }
  }

  .user-info {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    h3 {
      @media screen and (max-width: 390px) {
        width: 60px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;
export const BtnLogOut = styled.button`
  padding: 2px 15px;
  background-color: #e8e6e6;
  border-radius: 5px;
`;
