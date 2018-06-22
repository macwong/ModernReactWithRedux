import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts2';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
