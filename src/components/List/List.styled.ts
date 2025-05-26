import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  margin: 0;
  list-style: none;
  max-width: 1200px;
  margin-inline: auto;
`;
