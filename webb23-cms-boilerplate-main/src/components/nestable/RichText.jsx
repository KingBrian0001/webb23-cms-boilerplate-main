import Link from 'next/link';
import React from 'react';
import { 
  render, 
  MARK_LINK,
  MARK_CODE,
  NODE_HR, 
  NODE_HEADING, 
  NODE_CODEBLOCK, 
  NODE_LI, 
  NODE_UL, 
  NODE_OL, 
  NODE_PARAGRAPH,
} from 'storyblok-rich-text-react-renderer';

export default function RichTextDefault({ blok }) {
  const { richtext, ...rest } = blok;

  const resolveNodeHeading = (children, props) => {
    const { level } = props;
    const HeadingTag = `h${level}`; // Use dynamic heading level
    return <HeadingTag>{children}</HeadingTag>;
  };
  
  const resolveNodeUL = (children) => <ul className="list-disc ml-4">{children}</ul>;
  const resolveNodeOL = (children) => <ol className="list-decimal ml-4">{children}</ol>;
  const resolveNodeLI = (children) => <li className="mb-1">{children}</li>;
  
  const resolveMarkLink = (children, props) => {
    const { linktype, href, target } = props;
    const linkClassNames = 'font-bold underline';
    if (linktype === 'email') {
      return <a className={linkClassNames} href={`mailto:${href}`}>{children}</a>;
    }
    if (href.match(/^(https?:)?\/\//)) {
      return <a className={linkClassNames} href={href} target='_blank' rel='noopener noreferrer'>{children}</a>;
    }
    return <Link className={linkClassNames} href={href}>{children}</Link>;
  };

  const resolveNodeParagraph = (children) => <p>{children}</p>;

  const resolveMarkCode = (children) => <code>{children}</code>; // Implementing basic code block rendering

  const resolvers = {
    markResolvers: {
      [MARK_LINK]: resolveMarkLink,
      [MARK_CODE]: resolveMarkCode,
    },
    nodeResolvers: {
      [NODE_HEADING]: resolveNodeHeading,
      [NODE_CODEBLOCK]: (children) => <pre><code>{children}</code></pre>, // Basic implementation
      [NODE_UL]: resolveNodeUL,
      [NODE_OL]: resolveNodeOL,
      [NODE_LI]: resolveNodeLI,
      [NODE_PARAGRAPH]: resolveNodeParagraph,
      [NODE_HR]: () => <div className="mt-8 mb-8"><hr className="border-t-2 border-t-gray-400" /></div>,
    },
    blokResolvers: {
      // Add additional component resolvers if needed
    },
  };

  const renderedRichText = render(richtext, resolvers);

  return (
    <div {...rest}>
      {renderedRichText}
    </div>
  );
}
