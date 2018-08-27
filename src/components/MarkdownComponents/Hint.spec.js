import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Hint from './Hint.styles';

describe('Hint', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Hint />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
