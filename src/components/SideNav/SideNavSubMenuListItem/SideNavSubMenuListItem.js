import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { SideNavSubMenuListemStyled } from '../SideNav.styles';

const SideNavSubMenuListem = ({ label, url, isActive }) => (
  <Link href={url}>
    <SideNavSubMenuListemStyled isActive={isActive}>{label}</SideNavSubMenuListemStyled>
  </Link>
);

SideNavSubMenuListem.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SideNavSubMenuListem;
