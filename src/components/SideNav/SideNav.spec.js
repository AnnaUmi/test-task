import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { SIDE_NAV_ITEM_TYPES } from '../../constants';
import SideNav from './SideNav';

jest.mock('./SideNavListItem', () => 'SideNavListItem');
jest.mock('./SideNavSubMenu', () => 'SideNavSubMenu');

const menuItems = [
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Buttons',
    id: 'components/buttons',
    url: '/components/buttons',
  },
  {
    type: SIDE_NAV_ITEM_TYPES.SubMenu,
    label: 'test2',
    id: 'components/test2',
    listItems: [
      { label: 'subMenu1', id: 'components/subMenu1', url: '/components/test' },
      { label: 'subMenu2', id: 'components/subMenu2', url: '/components/test' },
    ],
  },
];

const invalidList = [
  {
    type: 'invalid',
    label: 'Buttons',
    id: 'components/buttons',
    url: '/components/buttons',
  },
];

describe('SideNav', () => {
  it('should match snapshot when rendering valid item types', () => {
    const tree = renderer.create(<SideNav menuItems={menuItems} currRoute="/components/buttons" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when rendering invalid item types', () => {
    const tree = renderer.create(
      <SideNav menuItems={invalidList} currRoute="/components/buttons" />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
