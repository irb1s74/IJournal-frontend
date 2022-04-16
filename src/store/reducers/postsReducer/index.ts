import { PostsAction, PostsActionEnum, PostsState } from './types';

const initialState: PostsState = {
  News: [],
};
export default function appReducer(
  state = initialState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionEnum.SET_NEWS:
      return { ...state, News: action.payload };
    default:
      return state;
  }
}
