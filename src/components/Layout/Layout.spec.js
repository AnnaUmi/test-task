import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { noop } from '../../constants';

import Layout from './Layout';

jest.mock('../../constants/routes', () => ({
  HEADER_NAV_ROUTES: [
    {
      route: '/',
      label: 'PRISM Logo',
      id: '/',
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
    },
  ],
  SIDE_NAV_ROUTES: {
    '/components': [
      {
        type: 'ListItem',
        label: 'Buttons',
        id: 'components/buttons',
        url: '/components/buttons',
      },
      {
        type: 'ListItem',
        label: 'Icons',
        id: 'components/icons',
        url: '/components/icons',
      },
    ],
  },
}));

describe('HeaderNav', () => {
  let router;
  let routes;

  beforeEach(() => {
    router = {
      pathName: '/',
      route: '/',
      query: {},
      back: noop,
      beforePopState: noop,
      prefetch: noop,
      push: noop,
      reload: noop,
      replace: noop,
    };

    routes = [
      {
        route: '/components',
        label: 'Components',
        id: '/components',
      },
    ];
  });

  it('should match snapshot when route is root', () => {
    const tree = renderer.create(<Layout router={router}>test children</Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when route is components/buttons', () => {
    router.route = '/components/buttons';
    Layout.routes = routes;

    const tree = renderer.create(<Layout router={router}>test children</Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when route does not exist', () => {
    router.route = '/test';
    Layout.routes = routes;

    const tree = renderer.create(<Layout router={router}>test children</Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
