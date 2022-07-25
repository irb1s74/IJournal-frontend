import { IPostsSetBookmarks, IPostsSetPosts, PostsActionEnum } from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch } from '../../index';
import PostService from '../../../api/PostService';

export const SetPosts = (payload: IPost[]): IPostsSetPosts => ({
  type: PostsActionEnum.SET_POSTS,
  payload,
});
export const SetBookmarks = (payload: IPost[]): IPostsSetBookmarks => ({
  type: PostsActionEnum.SET_BOOKMARKS,
  payload,
});

export const getPopularPosts = () => async (dispatch: AppDispatch) => {
  const response = await PostService.getPopularPost();
  if (response?.data) {
    dispatch(SetPosts(response.data));
  }
};

export const getNewPosts = () => async (dispatch: AppDispatch) => {
  const response = await PostService.getNewPost();
  if (response?.data) {
    dispatch(SetPosts(response.data));
  }
};
export const getSubsPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    const response = await PostService.getSubsPost(token);
    if (response?.data) {
      dispatch(SetPosts(response.data));
    }
  };

export const getBookmarksPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    const response = await PostService.getBookmarksPosts(token);
    if (response?.data) {
      dispatch(SetPosts(response.data));
    }
  };

export const toBookmarks =
  (token: string, postId: number) => async (dispatch: AppDispatch) => {
    const response = await PostService.toBookmark(token, postId);
    if (response?.data) {
      dispatch(SetBookmarks(response.data));
    }
  };

export const initialGetBookmarksPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    const response = await PostService.getBookmarksPosts(token);
    if (response?.data) {
      dispatch(SetBookmarks(response.data));
    }
  };
