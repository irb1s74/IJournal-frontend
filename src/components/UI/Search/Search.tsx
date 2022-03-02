import React from 'react';
import { IoSearch } from 'react-icons/io5';
import {
  SearchInput,
  SearchIconWrapper,
  StyledInputBase,
} from './Search.styled';


const Search = () => {
  return (
    <SearchInput>
      <SearchIconWrapper>
        <IoSearch />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchInput>
  );
};

export default Search;
