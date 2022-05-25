import {
  PostEditorAction,
  PostEditorActionEnum,
  PostEditorState,
} from './types';
import { EFetchStatus } from '../../../models/EFetchStatus';

const initialState: PostEditorState = {
  postEditorFetchStatus: EFetchStatus.idle,
  postId: 0,
};
export default function createPostReducer(
  state = initialState,
  action: PostEditorAction
): PostEditorState {
  switch (action.type) {
    case PostEditorActionEnum.SET_DATA:
      return {
        ...state,
        postId: action.payload,
      };
    case PostEditorActionEnum.SET_STATUS:
      return {
        ...state,
        postEditorFetchStatus: action.payload,
      };
    default:
      return state;
  }
}
