import styled from 'styled-components';
import { LayoutProps } from '../../types/layout';
import { fadeIn } from '../../styles/animations';

export const HomeLayout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: ${fadeIn} 0.5s ease;
`;
