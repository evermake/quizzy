import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  md: string;
}

const Title: React.FC = ({ children }) => <h1>{children}</h1>;

const List: React.FC<{ ordered?: boolean }> = ({ ordered, children }) =>
  ordered ? <ol>{children}</ol> : <ul>{children}</ul>;

const Text: React.FC<{ strong?: boolean; emphasis?: boolean }> = ({
  strong,
  emphasis,
  children,
}) => {
  if (strong) {
    return <strong>{children}</strong>;
  } else if (emphasis) {
    return <em>{children}</em>;
  }
  return <>{children}</>;
};

const Link: React.FC<{ href: string }> = ({ href, children }) => (
  <a href={href} style={{ color: 'blue' }}>
    {children}
  </a>
);

const MarkdownComponent: React.FC<MarkdownProps> = ({ md }) => {
  const components = {
    h1: Title,
    h2: Title,
    h3: Title,
    h4: Title,
    h5: Title,
    h6: Title,
    ul: List,
    ol: (props: any) => <List ordered {...props} />,
    p: ({ node, ...props }) => <Text {...props} />,
    strong: ({ node, ...props }) => <Text strong {...props} />,
    em: ({ node, ...props }) => <Text emphasis {...props} />,
    a: Link,
  };

  return (
    <ReactMarkdown components={components} children={md} />
  );
};

export default MarkdownComponent;
