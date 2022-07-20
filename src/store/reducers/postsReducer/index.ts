import { PostsAction, PostsActionEnum, PostsState } from './types';

const initialState: PostsState = {
  posts: [],
};
export default function postsReducer(
  state = initialState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionEnum.SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
