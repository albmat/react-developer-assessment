import styled, { css } from 'styled-components';
import { StyledButtonProps } from '../../types/button';
import { darken } from 'polished';

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  transition: background-color 0.2s ease;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background-color: ${theme.colors.primary};
      &:hover {
        background-color: ${darken(0.1, theme.colors.primary)};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${theme.colors.secondary};
      &:hover {
        background-color: ${darken(0.1, theme.colors.secondary)};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'danger' &&
    css`
      background-color: ${theme.colors.danger};
      &:hover {
        background-color: ${darken(0.1, theme.colors.danger)};
      }
    `}
`;
