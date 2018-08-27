import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import HighlightedCode from './HighlightedCode';

describe('HeaderNav', () => {
  let code;
  beforeEach(() => {
    code = `
      <Button variant='standard'>
        My cool button
      </Button>
    `;
  });

  it('should render code component', () => {
    const tree = renderer.create(<HighlightedCode code={code} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
