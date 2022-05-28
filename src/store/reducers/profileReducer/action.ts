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
      console.log('ale')
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.getDrafts(token);
      dispatch(SetProfileDraftPosts(response.data, EFetchStatus.succeeded));
    } catch (e) {
      dispatch(SetProfileFetchStatus(EFetchStatus.failed));
    }
  };
