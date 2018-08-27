import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markdown';
import { Pre, Code, Token } from './HighlightedCode.styles';

const isToken = t => t instanceof Prism.Token;

export const renderPrismTokens = tokens =>
  tokens.map((token, i) => {
    if (isToken(token)) {
      const { type, content } = token;
      const key = `${type}-${i}`; // no other prop to use as key except index
      return (
        <Token key={key} type={type}>
          {Array.isArray(content) ? renderPrismTokens(content) : content}
        </Token>
      );
    }
    return token;
  });

const HighlightedCode = ({ language, code, isVisible }) => {
  const prismLanguage = Prism.languages[language];
  const prismTokens = Prism.tokenize(code, prismLanguage);

  return (
    isVisible && (
      <Pre>
        <Code>{renderPrismTokens(prismTokens)}</Code>
      </Pre>
    )
  );
};

HighlightedCode.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

HighlightedCode.defaultProps = {
  language: 'jsx',
  isVisible: false,
};

export default HighlightedCode;
