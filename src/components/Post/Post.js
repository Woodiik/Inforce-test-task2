import {
  Content,
  Date,
  Item,
  Owner,
  Tag,
  Tags,
  Title,
  TopContainer,
} from './Post.styled';

export const Post = ({ post }) => {
  return (
    <Item>
      <TopContainer>
        <Title>{post.title}</Title>
        <Owner>{post.owner}</Owner>
        <Date>{post.date}</Date>
        <Content>{post.content}</Content>
      </TopContainer>
      <Tags>
        {post.tags &&
          post.tags.map(tag => <Tag href={`#${tag}`}>{`#${tag}`}</Tag>)}
      </Tags>
    </Item>
  );
};
