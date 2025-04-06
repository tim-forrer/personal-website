import { marked } from 'marked';
import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MemoizedMarkdown.module.css';

function parseMarkdownIntoBlocks(markdown: string): string[] {
    const tokens = marked.lexer(markdown);
    return tokens.map(token => token.raw);
}

const MemoizedMarkdownBlock = memo(
    ({ content }: { content: string }) => {
        return (
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <p {...props} className={styles.md} />,
                }}
            >
                {content}
            </ReactMarkdown>
        );
    },
    (prevProps, nextProps) => {
        if (prevProps.content !== nextProps.content) return false;
        return true;
    },
);

MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock'; // Used for debugging

export const MemoizedMarkdown = memo(
    ({ content, id }: { content: string; id: string }) => {
        const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

        return blocks.map((block, index) => (
            <MemoizedMarkdownBlock content={block} key={`${id}-block_${index}`} />
        ));
    },
);

MemoizedMarkdown.displayName = 'MemoizedMarkdown';