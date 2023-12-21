const isLogingReducer = (state = true, action) => {
  switch (action.type) {
    // ログインしていたら、ログインしなくする。ログインしていなかったら、ログインする。
    case 'LOGIN':
      return !state;
    default:
      return state;
  }
};

export default isLogingReducer;
