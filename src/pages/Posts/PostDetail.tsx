import Layout from '../Layout';
import { PostList } from '../../components/PostList';

const PostDetail: React.FC = () => {
    return (
        <Layout >
            <PostList title={'The Lorem Ipsum Chronicles'} />
        </Layout>
    );
};

export default PostDetail;