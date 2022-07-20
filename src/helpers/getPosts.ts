import { ELayouts } from '../models/ELayouts';
import {
  getNewPosts,
  getPopularPosts,
} from '../store/reducers/postsReducer/actions';

export const getPosts = (type: ELayouts) => {
  switch (type) {
    case ELayouts.popular:
      return getPopularPosts();
    case ELayouts.new:
      return getNewPosts();
    default:
      return getPopularPosts();
  }
};
