import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';


interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language}) => {
  return (
    <div className='codeContainer' style={{position: "relative"}}>
      <SyntaxHighlighter language={language} style={okaidia}>
        {"\n" + code}
      </SyntaxHighlighter>
      <div style={{position: "absolute", top: 15, right: 5, backgroundColor: "yellow", borderRadius: "5px", padding: "2px 5px 2px 5px", border: "2px solid black"}}>
        <span style={{fontWeight: 500, letterSpacing: "1px", color: "black", fontSize: 22}}>JS</span>
      </div>
    </div>
  );
};

export default CodeBlock;