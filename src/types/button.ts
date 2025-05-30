export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
};

export type StyledButtonProps = {
  variant: 'primary' | 'secondary' | 'danger';
};
