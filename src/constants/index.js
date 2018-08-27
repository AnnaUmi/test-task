import PropTypes from 'prop-types';

/* eslint-disable import/prefer-default-export */
export const NORMALIZE_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css';

export const SIDE_NAV_ITEM_TYPES = {
  ListItem: 'ListItem',
  SubMenu: 'SubMenu',
};

export const routerProps = PropTypes.shape({
  pathName: PropTypes.string,
  route: PropTypes.string,
  query: PropTypes.object,
  back: PropTypes.func,
  beforePopState: PropTypes.func,
  prefetch: PropTypes.func,
  push: PropTypes.func,
  reload: PropTypes.func,
  replace: PropTypes.func,
});

export const sideNavSubMenuItemProps = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export const sideNavItemProps = {
  ...sideNavSubMenuItemProps,
  type: PropTypes.oneOf([SIDE_NAV_ITEM_TYPES.ListItem, SIDE_NAV_ITEM_TYPES.SubMenu]).isRequired,
};

export const noop = () => {};
