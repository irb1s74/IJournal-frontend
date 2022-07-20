import { IPost } from '../../../models/IPost';

export interface PostsState {
  posts: IPost[];
}

export enum PostsActionEnum {
  SET_POSTS = 'SET_POSTS',
}

export interface IPostsSetPosts {
  type: PostsActionEnum.SET_POSTS;
  payload: IPost[];
}

export type PostsAction = IPostsSetPosts;
