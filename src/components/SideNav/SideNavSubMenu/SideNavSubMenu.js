import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SideNavSubMenuListItem from '../SideNavSubMenuListItem';
import { SideNavListItemStyled, SubMenuListItemContainer } from '../SideNav.styles';
import { sideNavSubMenuItemProps } from '../../../constants';

class SideNavSubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: this.isOpenedOnInit(),
    };
  }

  isOpenedOnInit = () => {
    const { listItems, currRoute } = this.props;

    return listItems.reduce((acc, curr) => {
      if (curr.url === currRoute) {
        return true;
      }

      return acc;
    }, false);
  };

  toggleMenu = () => {
    const { isOpened } = this.state;
    this.setState({
      isOpened: !isOpened,
    });
  };

  render() {
    const { listItems, label, currRoute } = this.props;
    const { isOpened } = this.state;
    return (
      <div>
        <SideNavListItemStyled onClick={this.toggleMenu} isActive={isOpened}>
          {label}
        </SideNavListItemStyled>
        <SubMenuListItemContainer isOpened={isOpened}>
          {listItems.map(item => (
            <SideNavSubMenuListItem isActive={currRoute === item.url} {...item} key={item.id} />
          ))}
        </SubMenuListItemContainer>
      </div>
    );
  }
}

SideNavSubMenu.propTypes = {
  label: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.shape(sideNavSubMenuItemProps)).isRequired,
  currRoute: PropTypes.string.isRequired,
};

export default SideNavSubMenu;
