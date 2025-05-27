import Layout from '../Layout';
import { PostList } from '../../components/List/PostList';
import { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import Filter from '../../components/Filter/Filter';
import Button from '../../components/Button/Button';
import { Post } from '../../types/post';
import { ListTitle, ListButtonContainer } from '../../components/List/List.styled';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { AnimatePresence } from 'framer-motion';
import { useFilter } from '../../hooks/useFilter';
import { useSearchParams } from 'react-router-dom';

const Posts: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategories = searchParams.getAll('category');
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const { data, isLoading, error } = usePosts();

    const posts: Post[] = data?.posts ?? [];
    const filteredPosts = useFilter(posts, selectedCategories);

    if (isLoading)
        return (
            <Layout aria-busy={isLoading} aria-live="polite">
                <Loading />
            </Layout>
        );
    if (error) return <Error message={(error as Error).message} />;

    const menuItems: string[] = Array.from(
        new Set(posts.flatMap((post: Post) => post.categories.map((category) => category.name))),
    );

    const handleFilterChange = (newFilters: string[]) => {
        setSearchParams({ category: newFilters });
    };

    return (
        <Layout aria-busy={isLoading} aria-live="polite">
            <ListTitle>The Lorem Ipsum Chronicles</ListTitle>
            <ListButtonContainer>
                <Button onClick={() => setShowFilter((curr) => !curr)}>
                    {!showFilter ? 'Show' : 'Hide'} filters
                </Button>
            </ListButtonContainer>
            <AnimatePresence>
                {showFilter && (
                    <Filter
                        items={menuItems}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={handleFilterChange}
                    />
                )}
            </AnimatePresence>
            <PostList filteredPosts={filteredPosts} />
        </Layout>
    );
};

export default Posts;
