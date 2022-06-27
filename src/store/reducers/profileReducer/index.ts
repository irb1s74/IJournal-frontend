import { ProfileAction, ProfileActionEnum, ProfileState } from './types';
import { EFetchStatus } from '../../../models/EFetchStatus';
import { IAuthor } from '../../../models/IAuthor';

const initialState: ProfileState = {
  user: {} as IAuthor,
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
    case ProfileActionEnum.SET_PROFILE_USER:
      return {
        ...state,
        user: action.user,
        profileFetchStatus: action.status,
      };
    case ProfileActionEnum.SET_PUBLISH_POSTS:
      return {
        ...state,
        publishPosts: action.payload,
        profileFetchStatus: action.status,
      };
    default:
      return state;
  }
}
