import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 30vh;
  font-size: 2rem;
  color: gray;
  p {
    margin-top: 40px;
    font-weight: 500;
    font-size: 2.5rem;
    &:last-child {
      margin-top: 20px;
      font-size: 1.4rem;
    }
  }
`;
