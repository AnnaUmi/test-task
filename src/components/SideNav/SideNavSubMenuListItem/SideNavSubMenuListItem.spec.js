import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SideNavSubMenuListItem from './SideNavSubMenuListItem';

describe('SideNavSubMenuListItem', () => {
  it('should match snapshot when not active', () => {
    const tree = renderer.create(
      <SideNavSubMenuListItem label="test label" url="test/url" isActive={false} />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when is active', () => {
    const tree = renderer.create(
      <SideNavSubMenuListItem label="test label" url="test/url" isActive />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
