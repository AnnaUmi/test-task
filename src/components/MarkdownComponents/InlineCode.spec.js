import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import components from './index';

describe('InlineCode', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<components.inlineCode />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
