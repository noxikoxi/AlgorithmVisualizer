import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { JavascriptOriginal } from 'devicons-react';
import { CplusplusOriginal } from 'devicons-react';


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
      <div style={{position: "absolute", top: 15, right: 5}}>
          {language === "javascript" ? <JavascriptOriginal size={40}/> : <CplusplusOriginal size={40}/>}
      </div>
    </div>
  );
};

export default CodeBlock;