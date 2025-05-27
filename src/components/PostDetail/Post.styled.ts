import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const PostWrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

export const PostTitle = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  text-align: center;
  font-size: 3rem;
`;

export const PostAuthor = styled.h2`
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  margin: 1rem;
`;
