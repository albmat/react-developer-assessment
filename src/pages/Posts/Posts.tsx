import Layout from '../Layout';
import { PostList } from '../../components/PostList';

const Post: React.FC = () => {
    return (
        <Layout >
            <PostList title={'The Lorem Ipsum Chronicles'} />
        </Layout>
    );
};

export default Post;