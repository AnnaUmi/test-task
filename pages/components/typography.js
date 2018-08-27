import React from 'react';
import { colors } from '@ticketmaster/prism';
import Document from '../../src/md/typography.mdx';

import components from '../../src/components/MarkdownComponents';

export const fontSizeRowStyle = {
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
};

export const fontSizeRowStyleDark = {
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colors.onyx.base,
};

export default () => <Document components={components} />;
