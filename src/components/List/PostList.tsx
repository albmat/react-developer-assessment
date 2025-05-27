import { Card } from '../Card/Card';
import { Post } from '../../types/post';
import { ListContainer, ListText } from './List.styled';
import { AnimatePresence } from 'framer-motion';

export const PostList = ({ filteredPosts }: { filteredPosts: Post[] }) => {

    return (
        <div>
            <ListContainer>
                <AnimatePresence>
                    {filteredPosts.length > 0 ? filteredPosts
                        .map((post: Post) => (
                            <Card post={post} key={post.id} />
                        )) : <ListText>No available posts</ListText>}
                </AnimatePresence>
            </ListContainer>
        </div>
    );
};
