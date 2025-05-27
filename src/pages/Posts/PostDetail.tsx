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
    const { id } = useParams<{ id: string }>();

    const posts: Post[] = data?.posts ?? [];
    const filteredPost = useId(posts, id);

    if (isLoading)
        return (
            <Layout aria-busy={isLoading} aria-live="polite">
                <Loading />
            </Layout>
        );
    if (error || !id || !filteredPost) {
        const errorMessage = error instanceof Error ? error.message : 'No post available';
        return <Error message={errorMessage} />;
    }

    return (
        <Layout>
            <PostDetail
                title={filteredPost.title}
                author={filteredPost.author.name}
                isLoading={isLoading}
            />
        </Layout>
    );
};

export default PostDetailPage;
