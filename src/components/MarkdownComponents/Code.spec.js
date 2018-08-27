import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Code from './Code';

jest.mock('./Hint.styles', () => 'HintComponent');

describe('Code', () => {
  it('should match snapshot when className is language-hint', () => {
    const tree = renderer.create(<Code className="language-hint" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when className is different from language-hint', () => {
    const tree = renderer.create(<Code className="language-js" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
