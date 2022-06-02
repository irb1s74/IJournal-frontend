import { EFetchStatus } from '../../../models/EFetchStatus';
import {
  IProfileSetDraftPosts,
  IProfileSetFetchStatus,
  IProfileSetPublishPosts,
  ProfileActionEnum,
} from './types';
import { IPost } from '../../../models/IPost';
import { AppDispatch } from '../../index';
import ProfileService from '../../../api/ProfileService';
import PostService from '../../../api/PostService';

export const SetProfileFetchStatus = (
  status: EFetchStatus
): IProfileSetFetchStatus => ({
  type: ProfileActionEnum.SET_PROFILE_FETCH_STATUS,
  payload: status,
});

export const SetProfileDraftPosts = (
  posts: IPost[],
  status: EFetchStatus
): IProfileSetDraftPosts => ({
  type: ProfileActionEnum.SET_DRAFT_POSTS,
  status,
  payload: posts,
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
