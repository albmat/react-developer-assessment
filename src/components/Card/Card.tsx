import { Post } from '../../types/post';
import { CardContainer, CardTitle, CardContent, CardAuthor, CardAuthorAvatar, CardTagsWrapper, CardCatTag } from './Card.styled';
import Button from '../Button/Button';

export const Card = ({ post }: { post: Post }) => {
    return (
        <CardContainer>
            <CardTitle>{post.title}</CardTitle>
            <CardTitle>{post.publishedDate}</CardTitle>
            <CardContent>{post.summary}</CardContent>
            <CardTagsWrapper>
                {post.categories.map((category) => {
                    return <CardCatTag key={category.id}>{category.name}</CardCatTag>
                })}
            </CardTagsWrapper>
            <CardAuthor>
                <CardAuthorAvatar src={post.author.avatar} />
                <p>{post.author.name}</p>
            </CardAuthor>
            <Button variant="primary">Read more</Button>
        </CardContainer>
    );
};
