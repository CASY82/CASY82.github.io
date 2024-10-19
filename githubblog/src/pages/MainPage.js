import React from 'react';
import '../styles/MainPage.css';
import BootstrapAlert from '../components/BootstrapAlert';

const posts = [
  { id: 1, title: '첫 번째 포스트', date: '2024-01-01', excerpt: '이것은 첫 번째 포스트의 요약입니다.', slug: 'first-post' },
  { id: 2, title: '두 번째 포스트', date: '2024-02-01', excerpt: '이것은 두 번째 포스트의 요약입니다.', slug: 'second-post' }
];

const MainPage = () => {
  return (
    <div className="main-page">
      <h2>대표 포스트 목록</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
            <a href={`/posts/${post.slug}`} className="read-more">읽기</a>
          </div>
        ))}
      </div>
      <br />
      <BootstrapAlert
        openBtnText="열기" 
        modalTitle="모달 제목" 
        modalContent="모달 내용입니다." 
        closeBtnText="닫기" 
        />
      <BootstrapAlert
        openBtnText="열기2" 
        modalTitle="모달 제목2" 
        modalContent="모달 내용입니다.2" 
        closeBtnText="닫기" 
        />
    </div>
  );
};

export default MainPage;