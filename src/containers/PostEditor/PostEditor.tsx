import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputBase,
  Stack,
} from '@mui/material';
import { IoClose } from 'react-icons/io5';
import Editor from '../../components/UI/Editor/Editor';
import { OutputData } from '@editorjs/editorjs';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDebounce } from '../../hooks/useDebounce';
import { EFetchStatus } from '../../models/EFetchStatus';
import { HiCheck } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import {
  PostEditorInitialRequest,
  PostEditorToPublish,
  PostEditorUpdate,
  SetPostEditorId,
} from '../../store/reducers/postEditorReducer/action';

interface PostEditorProps {
  initialRequest: (token: string) => void;
  postToPublish: (token: string) => void;
  updatePost: (token: string, data: any) => void;
  setPostId: (postId: number) => void;
  closeModal: () => void;
  token: string;
  option: any;
  fetchStatus: EFetchStatus;
}

const PostEditor: FC<PostEditorProps> = memo(
  ({
    closeModal,
    token,
    option,
    fetchStatus,
    initialRequest,
    updatePost,
    setPostId,
    postToPublish,
  }) => {
    const [body, setBody] = useState<OutputData['blocks']>([]);
    const [postTitle, setPostTitle] = useState('');
    useEffect(() => {
      if (!option) {
        initialRequest(token);
      } else {
        setPostId(option?.id);
        setPostTitle(option?.title);
        setBody(option?.data?.entry.blocks);
      }
    }, []);

    const handleOnChangeEditor = useCallback((arr: OutputData['blocks']) => {
      setBody(arr);
    }, []);

    const handleOnChangeTitle = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPostTitle(event.target.value);
    };
    const handleUpdatePost = useDebounce(async (data) => {
      updatePost(token, data);
    }, 1000);

    useEffect(() => {
      handleUpdatePost({ title: postTitle, entry: body });
    }, [body, postTitle]);

    const handlePostToPublish = () => {
      postToPublish(token);
    };

    return (
      <Dialog
        fullWidth
        open
        maxWidth='md'
        onClose={closeModal}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{ p: '10px 24px' }} id='alert-dialog-title'>
          <Stack justifyContent='space-between' direction='row'>
            <InputBase
              value={postTitle}
              placeholder='Заголовок'
              sx={{ fontSize: '28px', width: '100%' }}
              onChange={handleOnChangeTitle}
            />
            <Box>
              <IconButton onClick={closeModal}>
                <IoClose />
              </IconButton>
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent dividers sx={{ minHeight: '100%' }}>
          <Editor initialBody={body} onChange={handleOnChangeEditor} />
        </DialogContent>
        <DialogActions>
          <Stack direction='row' alignItems='center' spacing={2}>
            {fetchStatus === 'loading' ? (
              <CircularProgress size={25} color='secondary' />
            ) : fetchStatus === 'succeeded' ? (
              <HiCheck size={24} color='#66bb6a' />
            ) : null}
            {option?.publish ? (
              <Button variant='contained'>Сохранить</Button>
            ) : (
              <Button onClick={handlePostToPublish} variant='contained'>
                Опубликовать
              </Button>
            )}
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }
);

const ContainerPostEditor: FC<{ closeModal: () => void; option: any }> = ({
  closeModal,
  option,
}) => {
  const dispatch = useDispatch();
  const token = useTypedSelector((state) => state.auth.user.token);
  const fetchStatus = useTypedSelector(
    (state) => state.postEditor.postEditorFetchStatus
  );
  const initialRequest = useCallback(
    (token: string) => dispatch(PostEditorInitialRequest(token)),
    []
  );
  const updatePost = useCallback(
    (token: string, data: any) => dispatch(PostEditorUpdate(token, data)),
    []
  );
  const setPostId = useCallback(
    (postId: number) => dispatch(SetPostEditorId(postId)),
    []
  );
  const postToPublish = useCallback(
    (token: string) => dispatch(PostEditorToPublish(token)),
    []
  );

  return (
    <PostEditor
      closeModal={closeModal}
      token={token}
      option={option}
      fetchStatus={fetchStatus}
      initialRequest={initialRequest}
      updatePost={updatePost}
      setPostId={setPostId}
      postToPublish={postToPublish}
    />
  );
};
export default ContainerPostEditor;
