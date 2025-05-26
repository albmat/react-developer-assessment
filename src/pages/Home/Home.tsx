import Layout from '../Layout';
import Button from '../../components/Button/Button';
import { useNavigate } from "react-router";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/posts");
    }
    return (
        <Layout>
            <h1>Welcome, brave scroller.</h1>
            <h2>You've entered the realm of random gibberish and glorious nonsense. Enjoy the chaos!</h2>
            <Button onClick={handleClick}>Embrace the Chaos</Button>
        </Layout>
    );
};

export default Home;