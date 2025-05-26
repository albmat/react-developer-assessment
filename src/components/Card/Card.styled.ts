import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  text-transform: capitalize;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const CardAuthor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const CardAuthorAvatar = styled.img`
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const CardTagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CardCatTag = styled.li`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;
