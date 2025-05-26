export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export type StyledButtonProps = {
  variant: 'primary' | 'secondary' | 'danger';
};
