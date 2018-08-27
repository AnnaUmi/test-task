import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { HeaderContainer, HeaderLogo, NavMenu, NavItem } from './HeaderNav.styles';

const renderNav = (nav, currRoute) =>
  nav.map(({ route, id, label }) => (
    <Link href={route} key={id}>
      <NavItem isActive={currRoute === route}>
        <div>{label}</div>
      </NavItem>
    </Link>
  ));

const HeaderNav = ({ currMainRoute, routes }) => {
  const logo = routes[0];
  const nav = routes.slice(1, routes.length);

  return (
    <HeaderContainer>
      <Link href={logo.route}>
        <HeaderLogo>{logo.label}</HeaderLogo>
      </Link>
      <NavMenu>{renderNav(nav, currMainRoute)}</NavMenu>
    </HeaderContainer>
  );
};

HeaderNav.propTypes = {
  currMainRoute: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeaderNav;
