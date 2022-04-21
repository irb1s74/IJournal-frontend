import { IPostsSetNews, PostsActionEnum } from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch } from '../../index';
import PostService from '../../../api/PostService';

export const PostsSetNews = (payload: IPost[]): IPostsSetNews => ({
  type: PostsActionEnum.SET_NEWS,
  payload,
});

export const getPosts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await PostService.getPost();
    if (response?.data) {
      dispatch(PostsSetNews(response.data));
    }
  } catch (e) {
    console.log(e);
  }
};
