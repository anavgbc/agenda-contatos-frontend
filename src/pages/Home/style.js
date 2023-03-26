import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(https://www.teahub.io/photos/full/95-958090_minimalistic-simple-background-trees-white-background-nice-and.jpg);
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .chakra-modal__body {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 95%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  border-radius: 9px;
`;
