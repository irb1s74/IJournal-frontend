import appReducer from './appReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import postsReducer from './postsReducer';

const Index = {
  app: appReducer,
  auth: authReducer,
  modal: modalReducer,
  posts: postsReducer,
};
export default Index;
