import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Content from './Content.styles';

describe('Content', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Content />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
