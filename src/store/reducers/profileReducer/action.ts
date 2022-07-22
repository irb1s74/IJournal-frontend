import { EFetchStatus } from '../../../models/EFetchStatus';
import {
  IProfileSetDraftPosts,
  IProfileSetFetchStatus,
  IProfileSetPublishPosts,
  IProfileSetSubscriptions,
  IProfileSetUser,
  ProfileActionEnum,
} from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch, store } from '../../index';
import ProfileService from '../../../api/ProfileService';
import PostService from '../../../api/PostService';
import { SetUser } from '../authReducer/actions';
import { IUser } from '../../../models/IUser';
import { ISubscription } from '../../../models/ISubscription';
import { ISubscriber } from '../../../models/ISubscriber';

export const SetProfileFetchStatus = (
  status: EFetchStatus
): IProfileSetFetchStatus => ({
  type: ProfileActionEnum.SET_PROFILE_FETCH_STATUS,
  payload: status,
});

export const SetProfileSubscriptions = (
  subscribers: ISubscriber[],
  subscriptions: ISubscription[]
): IProfileSetSubscriptions => ({
  type: ProfileActionEnum.SET_SUBSCRIPTIONS,
  subscribers,
  subscriptions,
});

export const SetProfileDraftPosts = (
  posts: IPost[],
  status: EFetchStatus
): IProfileSetDraftPosts => ({
  type: ProfileActionEnum.SET_DRAFT_POSTS,
  status,
  payload: posts,
});

export const SetProfileUser = (
  user: IUser,
  status: EFetchStatus
): IProfileSetUser => ({
  type: ProfileActionEnum.SET_PROFILE_USER,
  status,
  user,
});

export const SetProfilePublishPosts = (
  posts: IPost[],
  status: EFetchStatus
): IProfileSetPublishPosts => ({
  type: ProfileActionEnum.SET_PUBLISH_POSTS,
  status,
  payload: posts,
});

export const getDraftPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.getDrafts(token);
      dispatch(SetProfileDraftPosts(response.data, EFetchStatus.succeeded));
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const toUnPublish =
  (token: string, postId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      await PostService.toUnPublish(token, postId);
      const response = await ProfileService.getPublish(token);
      dispatch(SetProfilePublishPosts(response.data, EFetchStatus.succeeded));
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const deletePost =
  (token: string, postId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      await PostService.deletePost(token, postId);
      const responsePublish = await ProfileService.getPublish(token);
      const responseDrafts = await ProfileService.getDrafts(token);
      dispatch(
        SetProfilePublishPosts(responsePublish.data, EFetchStatus.loading)
      );
      dispatch(
        SetProfileDraftPosts(responseDrafts.data, EFetchStatus.succeeded)
      );
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const getPublishPosts =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.getPublish(token);
      dispatch(SetProfilePublishPosts(response.data, EFetchStatus.succeeded));
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const updateBanner =
  (token: string, file: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.updateBanner(token, file);
      const { user } = store.getState().auth;
      dispatch(SetUser({ ...user, banner: response.data }, true));
      dispatch(SetProfileFetchStatus(EFetchStatus.succeeded));
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const updateAvatar =
  (token: string, file: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.updateAvatar(token, file);
      const { user } = store.getState().auth;
      dispatch(SetUser({ ...user, avatar: response.data }, true));
      dispatch(SetProfileFetchStatus(EFetchStatus.succeeded));
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const getProfileUser =
  (userId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.getUser(userId);
      dispatch(SetProfileUser(response.data.user, EFetchStatus.loading));
      dispatch(
        SetProfileSubscriptions(
          response.data.subs.subscribers,
          response.data.subs.subscriptions
        )
      );
      dispatch(
        SetProfilePublishPosts(response.data.posts, EFetchStatus.succeeded)
      );
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };

export const getUserSubscriptions =
  (userId: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await ProfileService.getUserSubscriptions(userId);
      dispatch(
        SetProfileSubscriptions(
          response.data.subscribers,
          response.data.subscriptions
        )
      );
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };
export const toSubscribe =
  (token: string, userId: number) => async (dispatch: AppDispatch) => {
    try {
      await ProfileService.toSubscribe(token, userId);
      const response = await ProfileService.getUserSubscriptions(userId);
      dispatch(
        SetProfileSubscriptions(
          response.data.subscribers,
          response.data.subscriptions
        )
      );
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };
