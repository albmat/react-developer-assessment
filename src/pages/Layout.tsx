import { Container } from './Layout.styled';
import { LayoutProps } from '../types/layout';

const Layout = ({ children, className }: LayoutProps) => (
    <Container className={className}>
        {children}
    </Container>
)

export default Layout;