import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  padding: 0.5rem;

  @media (min-width: 1024px) {
    padding: 2rem 5rem;
  }
`;
