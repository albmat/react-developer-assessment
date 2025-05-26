import { StyledButton } from './Button.styled';
import { ButtonProps } from '../../types/button';

export default function Button({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
}: ButtonProps) {
    return (
        <StyledButton $variant={variant} onClick={onClick} type={type}>
            {children}
        </StyledButton>
    );
}