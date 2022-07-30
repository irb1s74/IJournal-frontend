import {
  IFindSetFetchStatus,
  IPostSetFetchStatus,
  IPostsSetBookmarks,
  IPostsSetFetchStatus,
  IPostsSetFoundPosts,
  IPostsSetPost,
  IPostsSetPosts,
  PostsActionEnum,
} from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch } from '../../index';
import PostService from '../../../api/PostService';
import { enqueueNotification } from '../appReducer/actions';
import { EFetchStatus } from '../../../models/EFetchStatus';

export const SetFetchStatus = (
  payload: EFetchStatus
): IPostsSetFetchStatus => ({
  type: PostsActionEnum.SET_POSTS_FETCH_STATUS,
  payload,
});

export const SetFindFetchStatus = (
  payload: EFetchStatus
): IFindSetFetchStatus => ({
  type: PostsActionEnum.SET_FIND_FETCH_STATUS,
  payload,
});
export const SetPostFetchStatus = (
  payload: EFetchStatus
): IPostSetFetchStatus => ({
  type: PostsActionEnum.SET_POST_FETCH_STATUS,
  payload,
});

export const SetPost = (payload: IPost): IPostsSetPost => ({
  type: PostsActionEnum.SET_POST,
  payload,
});
export const SetPosts = (payload: IPost[]): IPostsSetPosts => ({
  type: PostsActionEnum.SET_POSTS,
  payload,
});
export const SetBookmarks = (payload: IPost[]): IPostsSetBookmarks => ({
  type: PostsActionEnum.SET_BOOKMARKS,
  payload,
});
export const SetFoundPosts = (payload: IPost[]): IPostsSetFoundPosts => ({
  type: PostsActionEnum.SET_FOUND_POSTS,
  payload,
});

export const getPost = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(SetPostFetchStatus(EFetchStatus.loading));
    const response = await PostService.getPost(id);
    if (response.data) {
      dispatch(SetPost(response.data[0]));
      dispatch(SetPostFetchStatus(EFetchStatus.succeeded));
    } else {
      dispatch(SetPostFetchStatus(EFetchStatus.failed));
      enqueueNotification({
        message: 'Пост не был найден',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
        },
      });
    }
  } catch (e) {
    dispatch(SetFetchStatus(EFetchStatus.failed));
    enqueueNotification({
      message: 'Произошла ошибка повторите попытку позже',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'error',
      },
    });
  }
};

export const findPosts = (content: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(SetFindFetchStatus(EFetchStatus.loading));
    const response = await PostService.findPosts(content);
    if (response?.data) {
      dispatch(SetFoundPosts(response.data));
      dispatch(SetFindFetchStatus(EFetchStatus.succeeded));
    }
  } catch (e) {
    dispatch(SetFindFetchStatus(EFetchStatus.failed));
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

export const getPopularPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(SetFetchStatus(EFetchStatus.loading));
    const response = await PostService.getPopularPost();
    if (response?.data) {
      dispatch(SetPosts(response.data));
      dispatch(SetFetchStatus(EFetchStatus.succeeded));
    }
  } catch (e) {
    dispatch(SetFetchStatus(EFetchStatus.failed));
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

export const getNewPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(SetFetchStatus(EFetchStatus.loading));
    const response = await PostService.getNewPost();
    if (response?.data) {
      dispatch(SetPosts(response.data));
      dispatch(SetFetchStatus(EFetchStatus.succeeded));
    }
  } catch (e) {
    dispatch(SetFetchStatus(EFetchStatus.failed));
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
export const getSubsPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetFetchStatus(EFetchStatus.loading));
      const response = await PostService.getSubsPost(token);
      if (response?.data) {
        dispatch(SetPosts(response.data));
        dispatch(SetFetchStatus(EFetchStatus.succeeded));
      }
    } catch (e) {
      dispatch(SetFetchStatus(EFetchStatus.failed));
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

export const getBookmarksPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetFetchStatus(EFetchStatus.loading));
      const response = await PostService.getBookmarksPosts(token);
      if (response?.data) {
        dispatch(SetPosts(response.data));
        dispatch(SetFetchStatus(EFetchStatus.succeeded));
      }
    } catch (e) {
      dispatch(SetFetchStatus(EFetchStatus.failed));
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
      dispatch(SetFetchStatus(EFetchStatus.failed));
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
    try {
      const response = await PostService.getBookmarksPosts(token);
      if (response.data) {
        dispatch(SetBookmarks(response.data));
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
