import React from 'react';
import 'jest-styled-components';
import { render } from 'react-testing-library';

import ResizableSpecimen from './ResizableSpecimen';
import HeaderNav from '../HeaderNav';
import { HEADER_NAV_ROUTES } from '../../constants/routes';

describe('ResizableSpecimen', () => {
  it('should match snapshot when responsive', () => {
    const { container } = render(
      <ResizableSpecimen responsive>
        <div>test</div>
      </ResizableSpecimen>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when NOT responsive', () => {
    const { container } = render(
      <ResizableSpecimen>
        <div>test</div>
      </ResizableSpecimen>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when responsive and has nested react element', () => {
    const { container } = render(
      <ResizableSpecimen responsive>
        <HeaderNav routes={HEADER_NAV_ROUTES} currMainRoute="/components" />
      </ResizableSpecimen>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
