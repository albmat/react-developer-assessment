import { usePosts } from '../../hooks/usePosts';
import { Card } from '../Card/Card';
import { Post } from '../../types/post';
import { ListContainer } from './List.styled';
import { Loading } from '../Loading/Loading';

export const PostList = ({ title }: { title: string }) => {
    const { data, isLoading, error } = usePosts();

    if (isLoading) return <Loading />;
    if (error) return <p>Error: {(error as Error).message}</p>;

    const { posts } = data;

    if (posts.length === 0) {
        return <p>No available posts.</p>;
    }

    return (
        <section aria-busy={isLoading} aria-live="polite">
            <h1>{title}</h1>
            <ListContainer>
                {posts.map((post: Post) => (
                    <Card post={post} key={post.id} />
                ))}
            </ListContainer>
        </section>
    );
};
