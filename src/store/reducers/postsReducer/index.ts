import { PostsAction, PostsActionEnum, PostsState } from './types';
import { IPost } from '../../../models/IPost';
import { EFetchStatus } from '../../../models/EFetchStatus';

const initialState: PostsState = {
  postsFetchStatus: EFetchStatus.idle,
  findFetchStatus: EFetchStatus.idle,
  postFetchStatus: EFetchStatus.idle,
  post: {} as IPost,
  posts: [],
  bookmarks: [],
  foundPosts: [],
};
export default function postsReducer(
  state = initialState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionEnum.SET_POST_FETCH_STATUS:
      return { ...state, postFetchStatus: action.payload };
    case PostsActionEnum.SET_POSTS_FETCH_STATUS:
      return { ...state, postsFetchStatus: action.payload };
    case PostsActionEnum.SET_FIND_FETCH_STATUS:
      return { ...state, findFetchStatus: action.payload };
    case PostsActionEnum.SET_POST:
      return { ...state, post: action.payload };
    case PostsActionEnum.SET_POSTS:
      return { ...state, posts: action.payload };
    case PostsActionEnum.SET_BOOKMARKS:
      return { ...state, bookmarks: action.payload };
    case PostsActionEnum.SET_FOUND_POSTS:
      return { ...state, foundPosts: action.payload };
    default:
      return state;
  }
}
