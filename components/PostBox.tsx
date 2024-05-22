// components/Posts.js
import { useState, useEffect } from 'react';
import { IPost } from 'utils/types';

const PostBox = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts/get-posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>My Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <img src={post.thumbnail} alt={post.title} style={{ width: '100px', height: '100px' }} />
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostBox;
