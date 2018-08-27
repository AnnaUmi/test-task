import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SideNavListItem from './SideNavListItem';
import { SIDE_NAV_ITEM_TYPES } from '../../../constants';

const item = {
  label: 'test label',
  url: 'test/url',
  id: 'test/url',
  type: SIDE_NAV_ITEM_TYPES.ListItem,
};

describe('SideNavListItem', () => {
  it('should match snapshot when not active', () => {
    const tree = renderer.create(<SideNavListItem item={item} isActive={false} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when is active', () => {
    const tree = renderer.create(<SideNavListItem item={item} isActive />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
