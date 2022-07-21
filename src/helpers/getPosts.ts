import { ELayouts } from '../models/ELayouts';
import {
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
    default:
      return getPopularPosts();
  }
};
