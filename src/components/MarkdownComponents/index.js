import Content from './Content.styles';
import Code from './Code';
import InlineCode from './InlineCode';
import Pre from './Pre';
import { TableComp, THElement, THeadElement, TRElement, TDElement } from './Table';

export const MarkdownContent = Content;

export default {
  pre: Pre,
  code: Code,
  inlineCode: InlineCode,
  table: TableComp,
  thead: THeadElement,
  th: THElement,
  td: TDElement,
  tr: TRElement,
};
