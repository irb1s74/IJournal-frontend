import { IPost } from '../../../models/IPost';

export interface PostsState {
  posts: IPost[];
  bookmarks: IPost[];
}

export enum PostsActionEnum {
  SET_POSTS = 'SET_POSTS',
  SET_BOOKMARKS = 'SET_BOOKMARKS',
}

export interface IPostsSetPosts {
  type: PostsActionEnum.SET_POSTS;
  payload: IPost[];
}

export interface IPostsSetBookmarks {
  type: PostsActionEnum.SET_BOOKMARKS;
  payload: IPost[];
}

export type PostsAction = IPostsSetPosts | IPostsSetBookmarks;
