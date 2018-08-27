import React from 'react';
import { colors } from '@ticketmaster/prism';
import Document from '../../src/md/grid.mdx';

import components from '../../src/components/MarkdownComponents';

export const contentStyles = {
  backgroundColor: colors.azure.base,
  textAlign: 'center',
};

export default () => <Document components={components} />;
