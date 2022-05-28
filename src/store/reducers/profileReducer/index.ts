import { ProfileAction, ProfileActionEnum, ProfileState } from './types';
import { EFetchStatus } from '../../../models/EFetchStatus';

const initialState: ProfileState = {
  publishPosts: [],
  draftPosts: [],
  profileFetchStatus: EFetchStatus.idle,
};

export default function profileReducer(
  state = initialState,
  action: ProfileAction
) {
  switch (action.type) {
    case ProfileActionEnum.SET_PROFILE_FETCH_STATUS:
      return { ...state, profileFetchStatus: action.payload };
    case ProfileActionEnum.SET_DRAFT_POSTS:
      return {
        ...state,
        draftPosts: action.payload,
        profileFetchStatus: action.status,
      };
    case ProfileActionEnum.SET_PUBLISH_POSTS:
      return { ...state, publishPosts: action.payload };
    default:
      return state;
  }
}
