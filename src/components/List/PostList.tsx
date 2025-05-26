import { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { Card } from '../Card/Card';
import Filter from '../Filter/Filter';
import Button from '../Button/Button';
import { Post } from '../../types/post';
import { ListTitle, ListButtonContainer, ListContainer, ListText } from './List.styled';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import { AnimatePresence } from 'framer-motion';
import { useFilter } from '../../hooks/useFilter'
import { useSearchParams } from 'react-router-dom';

export const PostList = ({ title }: { title: string }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategories = searchParams.getAll('category');
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const { data, isLoading, error } = usePosts();

    const posts: Post[] = data?.posts ?? [];
    const filteredPosts = useFilter(posts, selectedCategories);

    if (isLoading) return <Loading />;
    if (error) return <Error message={(error as Error).message} />;

    const menuItems: string[] = Array.from(
        new Set(
            posts.flatMap((post: Post) =>
                post.categories.map((category) => category.name)
            )
        )
    );

    const handleFilterChange = (newFilters: string[]) => {
        setSearchParams({ category: newFilters });
    };

    return (
        <section aria-busy={isLoading} aria-live="polite">
            <ListTitle>{title}</ListTitle>
            <ListButtonContainer>
                <Button onClick={() => setShowFilter((curr) => !curr)}>{!showFilter ? 'Show' : 'Hide'} filters</Button>
            </ListButtonContainer>
            <AnimatePresence>
                {showFilter && <Filter items={menuItems} selectedCategories={selectedCategories} setSelectedCategories={handleFilterChange} />}
            </AnimatePresence>
            <ListContainer>
                <AnimatePresence>
                    {filteredPosts.length > 0 ? filteredPosts
                        .map((post: Post) => (
                            <Card post={post} key={post.id} />
                        )) : <ListText>No available posts</ListText>}
                </AnimatePresence>
            </ListContainer>
        </section>
    );
};
