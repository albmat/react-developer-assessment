import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { motion } from 'framer-motion';

export const FilterWrapper = styled(motion.ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const FilterCatTag = styled.li`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.tertiary)};
  }

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${({ theme }) => darken(0.1, theme.colors.tertiary)};
    `}
`;
