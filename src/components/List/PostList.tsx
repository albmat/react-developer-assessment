import { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { Card } from '../Card/Card';
import Filter from '../Filter/Filter';
import Button from '../Button/Button';
import { Post } from '../../types/post';
import { ListTitle, ListButtonContainer, ListContainer } from './List.styled';
import { Loading } from '../Loading/Loading';
import { FilterItem } from '../../types/filter'
import { AnimatePresence } from 'framer-motion';
import { useFilter } from '../../hooks/useFilter'

export const PostList = ({ title }: { title: string }) => {
    const [selectedCategory, setSelectedCategory] = useState<FilterItem[]>([]);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const { data, isLoading, error } = usePosts();

    const posts: Post[] = data?.posts ?? [];
    const filteredPosts = useFilter(posts, selectedCategory);

    if (isLoading) return <Loading />;
    if (error) return <p>Error: {(error as Error).message}</p>;

    if (posts.length === 0) {
        return <p>No available posts.</p>;
    }

    const menuItems: string[] = Array.from(
        new Set(
            posts.flatMap((post: Post) =>
                post.categories.map((category) => category.name)
            )
        )
    );

    return (
        <section aria-busy={isLoading} aria-live="polite">
            <ListTitle>{title}</ListTitle>
            <ListButtonContainer>
                <Button onClick={() => setShowFilter((curr) => !curr)}>{!showFilter ? 'Show' : 'Hide'} filters</Button>
            </ListButtonContainer>
            <AnimatePresence>
                {showFilter && <Filter items={menuItems} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
            </AnimatePresence>
            <ListContainer>
                <AnimatePresence>
                    {filteredPosts
                        .map((post: Post) => (
                            <Card post={post} key={post.id} />
                        ))}
                </AnimatePresence>
            </ListContainer>
        </section>
    );
};
