import Layout from '../Layout';
import { PostDetail } from '../../components/PostDetail/PostDetail';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { usePosts } from '../../hooks/usePosts';
import { useId } from '../../hooks/useFilter';
import { Post } from '../../types/post';
import { useParams } from 'react-router-dom';

const PostDetailPage: React.FC = () => {
    const { data, isLoading, error } = usePosts();

    const params = useParams()
    const { id } = params;

    const posts: Post[] = data?.posts ?? [];
    const filteredPost = useId(posts, id);

    if (isLoading) return <Layout ><Loading /></Layout>;
    if (error || !filteredPost) return <Error message={(error as Error).message || 'No post available'} />;

    return (
        <Layout >
            <PostDetail title={filteredPost.title} author={filteredPost.author.name} isLoading={isLoading} />
        </Layout>
    );
};

export default PostDetailPage;