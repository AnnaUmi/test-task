import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import HeaderNav from './HeaderNav';

const mockRoutes = [
  {
    route: '/',
    label: 'PRISM Logo',
    id: '/',
  },
  {
    route: '/brand',
    label: 'Brand',
    id: '/brand',
  },
  {
    route: '/product',
    label: 'Product',
    id: '/product',
  },
  {
    route: '/marketing',
    label: 'Marketing',
    id: '/marketing',
  },
  {
    route: '/components',
    label: 'Components',
    id: '/components',
    subRoutes: [
      {
        route: '/components/buttons',
        label: 'Buttons',
        id: 'components/buttons',
      },
      {
        route: '/components/icons',
        label: 'Icons',
        id: 'components/icons',
      },
      {
        route: '/components/grid',
        label: 'Grid',
        id: 'components/grid',
      },
    ],
  },
];

describe('HeaderNav', () => {
  it('should match snapshot route is root', () => {
    const tree = renderer.create(<HeaderNav routes={mockRoutes} currMainRoute="/" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot route is brand', () => {
    const tree = renderer.create(<HeaderNav routes={mockRoutes} currMainRoute="/brand" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot route is product', () => {
    const tree = renderer
      .create(<HeaderNav routes={mockRoutes} currMainRoute="/product" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot route is marketing', () => {
    const tree = renderer
      .create(<HeaderNav routes={mockRoutes} currMainRoute="/marketing" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot route is components', () => {
    const tree = renderer
      .create(<HeaderNav routes={mockRoutes} currMainRoute="/components" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot route is buttons inside components', () => {
    const tree = renderer
      .create(<HeaderNav routes={mockRoutes} currMainRoute="/components/buttons" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
