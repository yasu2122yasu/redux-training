import { configureStore, createSlice } from '@reduxjs/toolkit';

// 初期状態を定義
const initialCountState = { count: 50 };
const initialPostsState = {
  posts: [
    { id: 1, title: 'Reduxについて' },
    { id: 2, title: 'ReduxのHooksについて' },
  ],
};

// createSliceを使用してcountReducerを定義
const countSlice = createSlice({
  name: 'count',
  initialState: initialCountState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
  },
});

// createSliceを使用してpostsReducerを定義
const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {},
});

// rootReducerに組み込む
const rootReducer = {
  count: countSlice.reducer,
  posts: postsSlice.reducer,
};

// ストアを設定
const store = configureStore({
  reducer: rootReducer,
});

// ストアとアクションクリエーターをエクスポート
export const { increaseCount, decreaseCount } = countSlice.actions;
export default store;
