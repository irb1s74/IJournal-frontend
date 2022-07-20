import { IPostsSetPosts, PostsActionEnum } from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch } from '../../index';
import PostService from '../../../api/PostService';

export const SetPosts = (payload: IPost[]): IPostsSetPosts => ({
  type: PostsActionEnum.SET_POSTS,
  payload,
});

export const getPopularPosts = () => async (dispatch: AppDispatch) => {
  console.log('pop');
  const response = await PostService.getPopularPost();
  if (response?.data) {
    dispatch(SetPosts(response.data));
  }
};

export const getNewPosts = () => async (dispatch: AppDispatch) => {
  console.log('new');
  const response = await PostService.getNewPost();
  if (response?.data) {
    dispatch(SetPosts(response.data));
  }
};
