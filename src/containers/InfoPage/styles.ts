import styled from 'styled-components';

export const Fields = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  max-width: 1260px;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-width: 320px;

  > ul {
    width: 90%;

    > li {      
      display: flex;
      justify-content: space-between;
      margin: 16px 0;

      img {
        object-fit: cover;
        width: 150px;
        height: 150px;
      }

      > span:nth-child(1) {
        font-weight: 700;
        font-size: 20px;
        text-transform: capitalize;
      }
      
      > span:nth-child(2) {
        max-width: 55%;
      }
    }
  }
`;
