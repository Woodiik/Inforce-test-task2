import { PostList } from 'components/PostList/PostList';
import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = search => {
    setSearch(search);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://gist.github.com/88429b356911d9290418b8c4700d8d30/raw/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchProducts();
  }, []);
  return (
    <Container>
      <h1>Posts</h1>
      <SearchForm posts={posts} handleSearch={handleSearch} />
      <PostList posts={posts} search={search} />
    </Container>
  );
};
