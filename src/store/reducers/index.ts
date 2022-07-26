import appReducer from './appReducer';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import postEditorReducer from './postEditorReducer';
import profileReducer from './profileReducer';

const Index = {
  app: appReducer,
  auth: authReducer,
  posts: postsReducer,
  postEditor: postEditorReducer,
  profile: profileReducer,
};
export default Index;
