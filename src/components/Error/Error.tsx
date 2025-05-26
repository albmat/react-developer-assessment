import { ErrorWrapper } from './Error.styled'
import Button from '../Button/Button';
import { ErrorProps } from '../../types/layout';

export const Error = ({ message, onRetry }: ErrorProps) => {
    return (
        <ErrorWrapper>
            <p>Error: {message}</p>
            {onRetry && <Button onClick={onRetry}>Retry</Button>}
        </ErrorWrapper>
    );
};