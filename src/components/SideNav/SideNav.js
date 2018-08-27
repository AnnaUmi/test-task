import React from 'react';
import PropTypes from 'prop-types';

import SideNavListItem from './SideNavListItem';
import SideNavSubMenu from './SideNavSubMenu';
import { SideNavContainer } from './SideNav.styles';
import { sideNavItemProps, sideNavSubMenuItemProps, SIDE_NAV_ITEM_TYPES } from '../../constants';

const SideNav = ({ menuItems, currRoute }) => (
  <SideNavContainer>
    {menuItems.map(item => {
      let result = null;

      if (item.type === SIDE_NAV_ITEM_TYPES.ListItem) {
        result = <SideNavListItem isActive={currRoute === item.url} item={item} key={item.id} />;
      } else if (item.type === SIDE_NAV_ITEM_TYPES.SubMenu) {
        result = (
          <SideNavSubMenu
            listItems={item.listItems}
            key={item.id}
            label={item.label}
            currRoute={currRoute}
          />
        );
      }

      return result;
    })}
  </SideNavContainer>
);

SideNav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      ...sideNavItemProps,
      listItems: PropTypes.arrayOf(PropTypes.shape(sideNavSubMenuItemProps)),
    })
  ).isRequired,
  currRoute: PropTypes.string.isRequired,
};

export default SideNav;
