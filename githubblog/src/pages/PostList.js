import React from 'react';
import Post from './Post';

const PostList = () => {
    return (
      <div className="main-page">
        <h2>포스트 목록</h2>
        <div className="post-list">
          <Post></Post>
        </div>
      </div>
    );
  };

export default PostList;