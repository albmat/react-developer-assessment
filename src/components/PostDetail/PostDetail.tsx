import { PostWrapper, PostTitle, PostAuthor } from './Post.styled';
import Button from '../Button/Button';
import { useNavigate } from "react-router";

export const PostDetail = ({ title, author, isLoading }: { title: string; author: string; isLoading: boolean }) => {
    const navigate = useNavigate();

    return (
        <PostWrapper aria-busy={isLoading} aria-live="polite">
            <PostTitle>{title}</PostTitle>
            <PostAuthor>by {author}</PostAuthor>
            <Button variant='primary' onClick={() => { navigate('/posts') }}>Go back</Button>
        </PostWrapper>
    );
};
