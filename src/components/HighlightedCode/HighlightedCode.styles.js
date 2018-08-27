import styled from 'styled-components';

const codeColors = {
  function: '#FF5555',
  keyword: '#3F7397',
  punctuation: '#535353',
  script: '#3F7397',
  string: '#00263E',
  tag: '#FF5555',
};

export const Pre = styled.pre`
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  background: #f9f9f9;
  border: none;
  box-sizing: border-box;
  color: #00263e;
  display: block;
  height: auto;
  line-height: 1.44;
  margin: 25px 0 0 0;
  overflow: auto;
  padding: 20px;
  white-space: pre;
  width: 100%;
  text-rendering: optimizeLegibility;
`;

export const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
`;

export const Token = styled.span`
  ${({ type }) => `color: ${codeColors[type]}`};
`;
