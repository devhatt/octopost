import React from 'react';

import { usePostsStore } from 'stores/usePostsStore';

const Testinho = ({ name = 'World' }) => {
  const posts = usePostsStore((state) => state.postsQuantity);

  const increaseValue = usePostsStore((state) => state.increase);

  return (
    <>
      <button onClick={() => increaseValue(1)}>Change value of posts</button>
      <p>Number of posts: {posts}</p>
      <h1>Hello, {name}!</h1>
    </>
  );
};

export default Testinho;
