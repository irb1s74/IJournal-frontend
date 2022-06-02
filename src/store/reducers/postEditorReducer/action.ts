import { EFetchStatus } from '../../../models/EFetchStatus';
import {
  PostEditorActionEnum,
  ISetPostEditorId,
  ISetPostEditorFetchStatus,
} from './types';
import { AppDispatch, store } from '../../index';
import PostService from '../../../api/PostService';
import { setModals } from '../modalReducer/actions';
import {
  SetProfileDraftPosts,
  SetProfileFetchStatus,
} from '../profileReducer/action';
import ProfileService from '../../../api/ProfileService';

export const SetPostEditorId = (postId: number): ISetPostEditorId => ({
  type: PostEditorActionEnum.SET_DATA,
  payload: postId,
});

export const SetPostEditorFetchStatus = (
  status: EFetchStatus
): ISetPostEditorFetchStatus => ({
  type: PostEditorActionEnum.SET_STATUS,
  payload: status,
});

export const PostEditorInitialRequest =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetPostEditorFetchStatus(EFetchStatus.loading));
      const response = await PostService.create(token);
      if (response.data.id) {
        dispatch(SetPostEditorId(response.data.id));
        dispatch(SetPostEditorFetchStatus(EFetchStatus.succeeded));
      } else {
        dispatch(SetPostEditorFetchStatus(EFetchStatus.failed));
      }
    } catch (e) {
      dispatch(SetPostEditorFetchStatus(EFetchStatus.failed));
    }
  };

export const PostEditorUpdate =
  (token: string, data: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetPostEditorFetchStatus(EFetchStatus.loading));
      const { postId } = store.getState().postEditor;
      if (postId) {
        await PostService.update(token, { postId, data });
        dispatch(SetPostEditorFetchStatus(EFetchStatus.succeeded));
      } else {
        dispatch(SetPostEditorFetchStatus(EFetchStatus.failed));
      }
    } catch (e) {
      dispatch(SetPostEditorFetchStatus(EFetchStatus.failed));
    }
  };

export const PostEditorToPublish =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(SetPostEditorFetchStatus(EFetchStatus.loading));
      const { postId } = store.getState().postEditor;
      dispatch(SetPostEditorFetchStatus(EFetchStatus.succeeded));
      await PostService.toPublish(token, postId);
      const { modals } = store.getState().modal;
      modals.pop();
      dispatch(SetProfileFetchStatus(EFetchStatus.loading));
      const response = await ProfileService.getDrafts(token);
      dispatch(SetProfileDraftPosts(response.data, EFetchStatus.succeeded));
      dispatch(setModals([...modals]));
    } catch (e) {
      dispatch(SetPostEditorFetchStatus(EFetchStatus.failed));
    }
  };
