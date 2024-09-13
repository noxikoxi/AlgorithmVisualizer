import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language}) => {
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;