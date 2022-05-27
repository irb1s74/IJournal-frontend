import { IPost } from '../../../models/IPost';
import { EFetchStatus } from '../../../models/EFetchStatus';

export interface ProfileState {
  publishPosts: IPost[];
  draftPosts: IPost[];
  profileFetchStatus: EFetchStatus;
}

export enum ProfileActionEnum {
  SET_DRAFT_POSTS = 'SET_DRAFT_POSTS',
  SET_PUBLISH_POSTS = 'SET_PUBLISH_POSTS',
  SET_PROFILE_FETCH_STATUS = 'SET_PROFILE_FETCH_STATUS',
}

export interface IProfileSetDraftPosts {
  type: ProfileActionEnum.SET_DRAFT_POSTS;
  payload: IPost[];
}

export interface IProfileSetPublishPosts {
  type: ProfileActionEnum.SET_PUBLISH_POSTS;
  payload: IPost[];
}

export interface IProfileSetFetchStatus {
  type: ProfileActionEnum.SET_PROFILE_FETCH_STATUS;
  payload: EFetchStatus;
}

export type ProfileAction =
  | IProfileSetDraftPosts
  | IProfileSetPublishPosts
  | IProfileSetFetchStatus;
