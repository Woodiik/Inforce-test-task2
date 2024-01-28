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
        <Owner>Anonym</Owner>
        <Date>2023-06-21</Date>
        <Content>{post.body}</Content>
      </TopContainer>
      <Tags>
        {/*{post.tags &&
          post.tags.map(tag => <Tag href={`#${tag}`}>{`#${tag}`}</Tag>)}*/}
        <Tag href="#tag">Tag</Tag>
      </Tags>
    </Item>
  );
};

//!!!!!!!!--- Earler i used json server from local db.json
