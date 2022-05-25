import { EFetchStatus } from '../../../models/EFetchStatus';

export interface PostEditorState {
  postEditorFetchStatus: EFetchStatus;
  postId: number;
}

export enum PostEditorActionEnum {
  SET_DATA = 'SET_DATA',
  SET_STATUS = 'SET_STATUS',
}

export interface ISetPostEditorId {
  type: PostEditorActionEnum.SET_DATA;
  payload: number;
}

export interface ISetPostEditorFetchStatus {
  type: PostEditorActionEnum.SET_STATUS;
  payload: EFetchStatus;
}

export type PostEditorAction = ISetPostEditorId | ISetPostEditorFetchStatus;
