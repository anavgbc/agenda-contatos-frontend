import styled from "styled-components";

export const Container = styled.div`
  /* height: 90%; */
  width: 90%;
  background-color: #dad8d8;
  display: flex;
  flex-direction: row;
  padding: 15px;
  /* justify-content: space-evenly; */
  justify-content: flex-start;
  border-radius: 10px;
  /* justify-content: space-around; */

  .container-img {
    width: 15%;
    /* margin: 0 auto; */
    /* align-items: center; */
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-info {
    p,
    h3,
    h2 {
      padding: 5px;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* margin-right: 50px; */
  }
`;
