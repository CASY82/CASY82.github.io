import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Post = () => {
    const [markdownContents, setMarkdownContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarkdownFiles = async () => {
            try {
                const files = ['post1.md', 'post2.md'];

                const contents = await Promise.all(
                    files.map(file => fetch(`/posts/${file}`).then(response => response.text()))
                );

                setMarkdownContents(contents);
            } catch (error) {
                console.error('Error fetching markdown files:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdownFiles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {markdownContents.map((content, index) => (
                <div key={index}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    <hr /> {/* 각 포스트 사이에 구분선 추가 */}
                </div>
            ))}
        </div>
    );
};

export default Post;
