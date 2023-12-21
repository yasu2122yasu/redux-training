export const increment = (number) => {
  return {
    type: 'INCREMENT',
    // payloadの意味はデータ
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const login = () => {
  return {
    type: 'LOGIN',
  };
};
