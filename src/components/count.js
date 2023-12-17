import React from 'react';
import { useSelector } from 'react-redux';

function Count() {
  const countValue = useSelector((state) => state.count.count);
  const posts = useSelector((state) => state.posts.posts);
  return (
    <>
      <div>Countコンポーネント: {countValue}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Count;
