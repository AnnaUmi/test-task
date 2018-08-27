import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SideNavSubMenu from './SideNavSubMenu';

const listItems = [
  {
    label: 'test sub item',
    url: 'test/sub/item',
    id: 'test/sub/item',
  },
];

describe('SideNavSubMenuListItem', () => {
  it('should match snapshot when not active', () => {
    const tree = renderer.create(
      <SideNavSubMenu label="test label" listItems={listItems} currRoute="no/match" />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot when is active', () => {
    const tree = renderer.create(
      <SideNavSubMenu label="test label" listItems={listItems} currRoute="test/sub/item" />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should call setState when toggleMenu is fired', () => {
    const tree = renderer.create(
      <SideNavSubMenu label="test label" listItems={listItems} currRoute="test/sub/item" />
    );
    const instance = tree.getInstance();
    const setStateMock = jest.fn();

    instance.setState = setStateMock;
    instance.toggleMenu();

    expect(setStateMock).toHaveBeenCalled();
    expect(setStateMock).toHaveBeenCalledTimes(1);
  });
});
