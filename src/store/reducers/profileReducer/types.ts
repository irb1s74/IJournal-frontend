import { IPost } from '../../../models/IPost';
import { EFetchStatus } from '../../../models/EFetchStatus';
import { IUser } from '../../../models/IUser';

export interface ProfileState {
  user: IUser;
  publishPosts: IPost[];
  draftPosts: IPost[];
  profileFetchStatus: EFetchStatus;
}

export enum ProfileActionEnum {
  SET_DRAFT_POSTS = 'SET_DRAFT_POSTS',
  SET_PUBLISH_POSTS = 'SET_PUBLISH_POSTS',
  SET_PROFILE_FETCH_STATUS = 'SET_PROFILE_FETCH_STATUS',
  SET_PROFILE_USER = 'SET_PROFILE_USER',
}

export interface IProfileSetDraftPosts {
  type: ProfileActionEnum.SET_DRAFT_POSTS;
  status: EFetchStatus;
  payload: IPost[];
}

export interface IProfileSetUser {
  type: ProfileActionEnum.SET_PROFILE_USER;
  status: EFetchStatus;
  user: IUser;
}

export interface IProfileSetPublishPosts {
  type: ProfileActionEnum.SET_PUBLISH_POSTS;
  status: EFetchStatus;
  payload: IPost[];
}

export interface IProfileSetFetchStatus {
  type: ProfileActionEnum.SET_PROFILE_FETCH_STATUS;
  payload: EFetchStatus;
}

export type ProfileAction =
  | IProfileSetUser
  | IProfileSetDraftPosts
  | IProfileSetPublishPosts
  | IProfileSetFetchStatus;
