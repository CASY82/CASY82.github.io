import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // HTML을 React 컴포넌트로 변환
import rehypeHighlight from 'rehype-highlight'; // 코드 하이라이팅
import plantumlEncoder from 'plantuml-encoder'; // PlantUML 인코딩 라이브러리
import remarkGfm from 'remark-gfm'; // GitHub Flavored Markdown 지원
import 'highlight.js/styles/a11y-dark.css'; // 코드 하이라이트 테마
import ImageComponent from '../components/ImageComponent';

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

                const modifiedContents = contents.map(content => processPlantUML(content));
                setMarkdownContents(modifiedContents);
            } catch (error) {
                console.error('Error fetching markdown files:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdownFiles();
    }, []);

    const processPlantUML = (markdown) => {
        const plantUmlRegex = /@startuml([\s\S]*?)@enduml/g;

        return markdown.replace(plantUmlRegex, (match, plantUmlCode) => {
            const encoded = plantumlEncoder.encode(plantUmlCode.trim());
            const imageUrl = `https://www.plantuml.com/plantuml/png/${encoded}`;
            // const imgTag = `<img src="${imageUrl}" alt="PlantUML Diagram" style="max-width: 100%;" />`;
            // return imgTag; // HTML로 변환된 <img> 태그를 반환
            return `![PlantUML Diagram](${imageUrl})`;
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {markdownContents.map((content, index) => (
                <div key={index}>
                    <ReactMarkdown 
                        rehypePlugins={[rehypeRaw, rehypeHighlight, remarkGfm]}
                        children={content}
                    />
                    <hr />
                </div>
            ))}
            <img src="https://www.plantuml.com/plantuml/png/AyxEp2j8B4hCLIXEBInDpKjEzKqjBavCJtNCoKpFKoZAJCyeuULooazIqBLJ08ebfofOAGI1b1O3nI42G1cG0f1uSK5-Nd4g0000"/>
        </div>
    );
};

export default Post;
