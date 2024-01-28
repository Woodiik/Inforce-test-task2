import React, { useEffect, useState } from 'react';
import { Post } from 'components/Post/Post';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { List } from './ProductList.styled';

export const PostList = ({ posts, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postsPerPage = 10;
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [posts, search]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (_, pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <List>
        {currentPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </List>
      <Stack
        spacing={2}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Pagination
          count={Math.ceil(filteredPosts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};
