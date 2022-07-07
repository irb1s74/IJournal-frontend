import { IPost } from '../../../models/IPost';
import { EFetchStatus } from '../../../models/EFetchStatus';
import { IUser } from '../../../models/IUser';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';

export interface ProfileState {
  user: IUser;
  publishPosts: IPost[];
  draftPosts: IPost[];
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
  profileFetchStatus: EFetchStatus;
}

export enum ProfileActionEnum {
  SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS',
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

export interface IProfileSetSubscriptions {
  type: ProfileActionEnum.SET_SUBSCRIPTIONS;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
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
  | IProfileSetSubscriptions
  | IProfileSetUser
  | IProfileSetDraftPosts
  | IProfileSetPublishPosts
  | IProfileSetFetchStatus;
