import appReducer from './appReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import postsReducer from './postsReducer';
import postEditorReducer from './postEditorReducer';
import profileReducer from './profileReducer';

const Index = {
  app: appReducer,
  auth: authReducer,
  modal: modalReducer,
  posts: postsReducer,
  postEditor: postEditorReducer,
  profile: profileReducer,
};
export default Index;
