import React from 'react';
import ReactMarkdown from 'react-markdown';
import reamrkGfm from 'remark-gfm';
import { Markdown } from './MarkdownRenderer.style';

function MarkdownRenderer(props: { children: any }) {
  return (
    <Markdown>
      <ReactMarkdown remarkPlugins={[reamrkGfm]}>{props.children}</ReactMarkdown>
    </Markdown>
  );
}

export default MarkdownRenderer;
