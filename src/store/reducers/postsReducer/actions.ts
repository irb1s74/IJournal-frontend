import { IPostsSetBookmarks, IPostsSetPosts, PostsActionEnum } from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch } from '../../index';
import PostService from '../../../api/PostService';
import { enqueueNotification } from '../appReducer/actions';

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
  (token: string, postId: number, inBookmarks: boolean) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await PostService.toBookmark(token, postId);
      if (response?.data) {
        dispatch(SetBookmarks(response.data));
        dispatch(
          enqueueNotification({
            message: inBookmarks
              ? 'Пост удален из избранного'
              : 'Пост добавлен в избранное',
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'info',
            },
          })
        );
      }
    } catch (e) {
      dispatch(
        enqueueNotification({
          message: 'Произошла ошибка повторите попытку позже',
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error',
          },
        })
      );
    }
  };

export const initialGetBookmarksPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    const response = await PostService.getBookmarksPosts(token);
    if (response?.data) {
      dispatch(SetBookmarks(response.data));
    }
  };
