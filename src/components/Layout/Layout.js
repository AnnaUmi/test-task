import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { routerProps } from '../../constants';
import { Footer, Content } from './Layout.styles';
import HeaderNav from '../HeaderNav';
import SideNav from '../SideNav';
import { HEADER_NAV_ROUTES, SIDE_NAV_ROUTES } from '../../constants/routes';
import { MarkdownContent } from '../MarkdownComponents';

const Layout = ({ router, children }) => {
  const currRoute = router.route;
  const currMainRoute = `/${router.route.split('/')[1]}`;
  const menuItems = SIDE_NAV_ROUTES[currMainRoute];

  return (
    <div>
      <HeaderNav routes={HEADER_NAV_ROUTES} currMainRoute={currMainRoute} />
      <Content>
        {menuItems && <SideNav menuItems={menuItems} currRoute={currRoute} />}
        <MarkdownContent>{children}</MarkdownContent>
      </Content>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  router: routerProps.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(Layout);
