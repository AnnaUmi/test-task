import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Pre from './Pre';

describe('Pre', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Pre />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
