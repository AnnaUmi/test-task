import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { sideNavItemProps } from '../../../constants';
import { SideNavListItemStyled } from '../SideNav.styles';

const SideNavListItem = ({ item, isActive }) => (
  <Link href={item.url}>
    <SideNavListItemStyled isActive={isActive}>{item.label}</SideNavListItemStyled>
  </Link>
);

SideNavListItem.propTypes = {
  item: PropTypes.shape(sideNavItemProps).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SideNavListItem;
