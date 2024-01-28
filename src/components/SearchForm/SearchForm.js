import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { Notify } from 'notiflix';
import { Button, Container } from './SearchForm.styled';

export const SearchForm = ({ posts, handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const postTitles = posts.map(post => post.title);
      setOptions(postTitles);
    }
  }, [posts]);

  const handleInputChange = (_, value) => {
    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue('');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    Notify.success(`Successfully searched  ${searchValue}`);
    setSearchValue('');
    handleSearch(searchValue);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Container>
          <Autocomplete
            sx={{ width: '400px' }}
            value={searchValue || ''}
            freeSolo={true}
            onChange={handleInputChange}
            inputValue={searchValue}
            onInputChange={handleInputChange}
            options={filteredOptions}
            renderInput={params => <TextField {...params} label="Search" />}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Container>
      </form>
    </Box>
  );
};
