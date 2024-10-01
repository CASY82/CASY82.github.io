import React from 'react';
import '../styles/MainPage.css'; // 스타일 파일을 추가합니다.

const posts = [
  { id: 1, title: '첫 번째 포스트', date: '2024-01-01', excerpt: '이것은 첫 번째 포스트의 요약입니다.', slug: 'first-post' },
  { id: 2, title: '두 번째 포스트', date: '2024-02-01', excerpt: '이것은 두 번째 포스트의 요약입니다.', slug: 'second-post' },
  // 추가 포스트를 여기에 추가
];

const MainPage = () => {
  return (
    <div className="main-page">
      <header>
        <h1>내 블로그</h1>
        <nav>
          <a href="/">홈</a>
          <a href="/about">소개</a>
        </nav>
      </header>

      <main>
        <h2>포스트 목록</h2>
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
      </main>

      <footer>
        <p>© 2024 내 블로그. 모든 권리 보유.</p>
      </footer>
    </div>
  );
};

export default MainPage;