import React from 'react';
import 'jest-styled-components';
import { render } from 'react-testing-library';

import { Colors } from '.';

describe('Colors', () => {
  it('should render colors', () => {
    const { container } = render(<Colors />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
