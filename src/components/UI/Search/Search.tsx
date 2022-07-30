import React, { FC, memo } from 'react';
import { IoSearch } from 'react-icons/io5';
import {
  SearchIconWrapper,
  SearchInput,
  StyledInputBase,
} from './Search.styled';
import {
  CircularProgress,
  ClickAwayListener,
  Fade,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../models/IPost';
import { EFetchStatus } from '../../../models/EFetchStatus';

interface SearchProps {
  handleFindPosts: (content: string) => void;
  findFetchStatus: EFetchStatus;
  foundPosts: IPost[];
}

const Search: FC<SearchProps> = ({
  handleFindPosts,
  foundPosts,
  findFetchStatus,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLInputElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const findIsLoading = findFetchStatus === EFetchStatus.loading;
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      handleFindPosts(e.target.value);
      if (!open) {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  };

  const toNavigate = (link: string) => {
    return () => {
      navigate(link);
    };
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!!event.currentTarget);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const setColor = (rating: number) => {
    if (rating > 0) {
      return '#388e3c';
    }
    if (rating < 0) {
      return '#d32f2f';
    }
    return '#757575';
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <SearchInput onClick={handleClick}>
          <SearchIconWrapper>
            <IoSearch />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={onChange}
            placeholder='Поиск…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchInput>
      </ClickAwayListener>
      <Popper
        disablePortal
        open={open}
        anchorEl={anchorEl}
        placement='bottom'
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ mt: '8px' }}>
              <List>
                {findIsLoading ? (
                  <Stack
                    alignItems='center'
                    sx={{ width: '267px', padding: '15px' }}
                  >
                    <CircularProgress size={26} />
                  </Stack>
                ) : foundPosts.length ? (
                  foundPosts.map((post, index) => (
                    <ListItemButton
                      onClick={toNavigate(`/post/${post.id}`)}
                      key={index}
                      sx={{ width: '267px' }}
                    >
                      <ListItemText>{post.title}</ListItemText>
                      <ListItemText
                        sx={{
                          textAlign: 'right',
                          color: setColor(post.rating),
                        }}
                      >
                        {post.rating}
                      </ListItemText>
                    </ListItemButton>
                  ))
                ) : (
                  <Typography textAlign='center' sx={{ width: '267px' }}>
                    Ничего не найдено
                  </Typography>
                )}
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default memo(Search);
