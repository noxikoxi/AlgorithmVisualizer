import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CplusplusOriginal, JavascriptOriginal, ZigOriginal } from 'devicons-react';

interface CodeBlockProps {
  codePair : {[key: string]: string};
}

const CodeBlock: React.FC<CodeBlockProps> = ({codePair}) => {
  const availableLanguages = Object.keys(codePair);
  const [language, setLanguage] = useState<string>(Object.keys(codePair)[0]);

  const languageIcons : {[key: string]: JSX.Element} = {
    cpp: <CplusplusOriginal size={40} />,
    javascript: <JavascriptOriginal size={40} />,
    zig: <ZigOriginal size={40} />
  };

  return (
    <div className="codeContainer" style={{ position: 'relative' }}>
      <SyntaxHighlighter language={language} style={okaidia}>
        {'\n' + codePair[language]}
      </SyntaxHighlighter>
      
      <div style={{
        position: 'absolute',
        top: 15,
        right: 5,
        display: 'flex',
        gap: '10px',
      }}>
        {availableLanguages.map((lang) => (
          <div
            key={lang}
            style={{
              cursor: 'pointer',
              opacity: lang === language ? 1 : 0.5,
              transition: 'opacity 0.7s',
            }}
            onClick={() => setLanguage(lang)}
          >
            {languageIcons[lang]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;