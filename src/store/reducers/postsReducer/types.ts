import { IPost } from '../../../models/IPost';
import { EFetchStatus } from '../../../models/EFetchStatus';

export interface PostsState {
  posts: IPost[];
  bookmarks: IPost[];
  foundPosts: IPost[];
  post: IPost;
  postsFetchStatus: EFetchStatus;
  findFetchStatus: EFetchStatus;
  postFetchStatus: EFetchStatus;
}

export enum PostsActionEnum {
  SET_POST = 'SET_POST',
  SET_POSTS = 'SET_POSTS',
  SET_BOOKMARKS = 'SET_BOOKMARKS',
  SET_FOUND_POSTS = 'SET_FOUND_POSTS',
  SET_POSTS_FETCH_STATUS = 'SET_POSTS_FETCH_STATUS',
  SET_FIND_FETCH_STATUS = 'SET_FIND_FETCH_STATUS',
  SET_POST_FETCH_STATUS = 'SET_FIND_FETCH_STATUS',
}

export interface IPostsSetPosts {
  type: PostsActionEnum.SET_POSTS;
  payload: IPost[];
}

export interface IPostsSetPost {
  type: PostsActionEnum.SET_POST;
  payload: IPost;
}

export interface IPostsSetFoundPosts {
  type: PostsActionEnum.SET_FOUND_POSTS;
  payload: IPost[];
}

export interface IPostsSetBookmarks {
  type: PostsActionEnum.SET_BOOKMARKS;
  payload: IPost[];
}

export interface IPostsSetFetchStatus {
  type: PostsActionEnum.SET_POSTS_FETCH_STATUS;
  payload: EFetchStatus;
}

export interface IFindSetFetchStatus {
  type: PostsActionEnum.SET_FIND_FETCH_STATUS;
  payload: EFetchStatus;
}

export interface IPostSetFetchStatus {
  type: PostsActionEnum.SET_POST_FETCH_STATUS;
  payload: EFetchStatus;
}

export type PostsAction =
  | IPostsSetFetchStatus
  | IPostsSetPosts
  | IPostsSetBookmarks
  | IPostsSetFoundPosts
  | IPostsSetPost
  | IPostSetFetchStatus
  | IFindSetFetchStatus;
