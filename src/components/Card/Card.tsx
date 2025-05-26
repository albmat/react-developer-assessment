import { Post } from '../../types/post';
import { CardContainer, CardWrapper, CardTitle, CardDate, CardAuthor, CardAuthorAvatar, CardTagsWrapper, CardCatTag } from './Card.styled';
import Button from '../Button/Button';
import FormattedDate from '../../utils/FormattedDate';

export const Card = ({ post }: { post: Post }) => {
    return (
        <CardContainer
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}>
            <CardWrapper>
                <div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDate><FormattedDate isoString={post.publishDate} /></CardDate>
                </div>
                <CardTagsWrapper>
                    {post.categories.map((category) => {
                        return <CardCatTag key={category.id}>{category.name}</CardCatTag>
                    })}
                </CardTagsWrapper>
                <CardAuthor>
                    <CardAuthorAvatar src={post.author.avatar} />
                    <p>{post.author.name}</p>
                </CardAuthor>
            </CardWrapper>
            <Button variant="primary">Read more</Button>
        </CardContainer>
    );
};
