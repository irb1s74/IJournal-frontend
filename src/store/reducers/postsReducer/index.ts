import { PostsAction, PostsActionEnum, PostsState } from './types';

const initialState: PostsState = {
  posts: [],
  bookmarks: [],
};
export default function postsReducer(
  state = initialState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionEnum.SET_POSTS:
      return { ...state, posts: action.payload };
    case PostsActionEnum.SET_BOOKMARKS:
      return { ...state, bookmarks: action.payload };
    default:
      return state;
  }
}
