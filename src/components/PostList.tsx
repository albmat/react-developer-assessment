import { usePosts } from '../hooks/usePosts';

export const PostList = () => {
    const { data, isLoading, error } = usePosts();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {(error as Error).message}</p>;

    return (
        <ul>
            {data.map((post: any) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};
