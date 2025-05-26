import { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { Card } from '../Card/Card';
import { Post } from '../../types/post';
import { ListContainer } from './List.styled';

export const PostList = ({ title }: { title: string }) => {
    const { data, isLoading, error } = usePosts();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {(error as Error).message}</p>;

    const { posts } = data;

    console.log(posts, 'posts');
    console.log(isLoading, 'isLoading');
    console.log(error, 'error');

    return (
        <section>
            <h1>{title}</h1>
            <ListContainer>
                {posts.map((post: Post) => (
                    <Card post={post} key={post.id} />
                ))}
            </ListContainer>
        </section>
    );
};
