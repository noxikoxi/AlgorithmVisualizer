declare module 'react-syntax-highlighter' {
    import * as React from 'react';
  
    export interface PrismProps {
      language: string;
      style?: object;
      showLineNumbers?: boolean;
      children?: React.ReactNode;
    }
  
    export const Prism: React.FC<PrismProps>;
  }
  