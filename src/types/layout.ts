import { ReactNode } from 'react';

export interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export type LayoutProps = {
  children: ReactNode;
  className?: string;
};
