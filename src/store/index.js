import { createStore, combineReducers } from 'redux';

const countReducer = (state = { count: 50 }) => {
  return state;
};

const postsReducer = (
  state = {
    posts: [
      { id: 1, title: 'Reduxについて' },
      { id: 2, title: 'ReduxのHooksについて' },
    ],
  }
) => {
  return state;
};

const rootReducer = combineReducers({
  count: countReducer, // 名前を変更
  posts: postsReducer,
});

const store = createStore(rootReducer);
export default store;
