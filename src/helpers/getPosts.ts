import { ELayouts } from '../models/ELayouts';
import {
  getBookmarksPosts,
  getNewPosts,
  getPopularPosts,
  getSubsPosts,
} from '../store/reducers/postsReducer/actions';

export const getPosts = (type: ELayouts, token: string) => {
  switch (type) {
    case ELayouts.popular:
      return getPopularPosts();
    case ELayouts.new:
      return getNewPosts();
    case ELayouts.subs:
      return getSubsPosts(token);
    case ELayouts.bookmarks:
      return getBookmarksPosts(token);
    default:
      return getPopularPosts();
  }
};
