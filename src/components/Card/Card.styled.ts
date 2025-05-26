import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  text-transform: capitalize;
`;

export const CardDate = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const CardAuthor = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
`;

export const CardAuthorAvatar = styled.img`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;
