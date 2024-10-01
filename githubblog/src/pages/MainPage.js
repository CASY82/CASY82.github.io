import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css'; // 스타일 파일을 별도로 만들 수 있습니다.

// 더미 포스트 데이터 (실제로는 마크다운 파일을 읽어와야 합니다)
const posts = [
  { id: 1, title: '첫 번째 포스트', date: '2024-01-01', slug: 'first-post' },
  { id: 2, title: '두 번째 포스트', date: '2024-02-01', slug: 'second-post' },
  // 추가 포스트를 여기에 추가
];

const MainPage = () => {
  return (
    <div className="main-page">
      <header>
        <h1>내 블로그</h1>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/about">소개</Link>
        </nav>
      </header>

      <main>
        <h2>포스트 목록</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.slug}`}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <p>© 2024 내 블로그. 모든 권리 보유.</p>
      </footer>
    </div>
  );
};

export default MainPage;