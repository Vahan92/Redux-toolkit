
import styled from 'styled-components';

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
  p {
    display: inline-block;
    margin: 0;
  }
  > span {
    display: inline-block;
    background-color: #e1e6ec;
    width: 78%;
    height: 2px;
    margin: 0 10px;
  }
  button {
    width: 114px;
    height: 36px;
  }
`;

export const Container = styled.div`
  padding: 16px 65px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  height: 100vh;

  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const TableInfo = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-end
`;

export const Total = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  > p {
    margin: 0;
  }
  span {
    color: #407eff;
  }
`;