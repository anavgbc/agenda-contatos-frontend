import styled from "styled-components";

export const ContainerList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  margin-top: 30px;
  width: 90%;
  height: 90%;
  overflow-y: scroll;
  /* position: relative; */

  #searchContent {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .empty-list {
    width: 100%;
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 40px;
      height: 40px;
      margin: 20px 10px;
      color: gray;
    }

    h3 {
      font-weight: 600;
      font-size: 20px;
      color: gray;
    }

    h2 {
      font-weight: 600;
      font-size: 16px;
      color: gray;
    }
  }
`;
