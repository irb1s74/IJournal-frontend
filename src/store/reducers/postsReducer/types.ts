import { IPost } from '../../../models/IPost';

export interface PostsState {
  News: IPost[];
}

export enum PostsActionEnum {
  SET_NEWS = 'SET_NEWS',
}

export interface IPostsSetNews {
  type: PostsActionEnum.SET_NEWS;
  payload: IPost[];
}

export type PostsAction = IPostsSetNews;
