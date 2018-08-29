import { SIDE_NAV_ITEM_TYPES } from '.';

export const HEADER_NAV_ROUTES = [
  {
    route: '/',
    label: 'PRISM Logo',
    id: '/',
  },
  {
    route: '/brand',
    label: 'Brand',
    id: '/brand',
  },
  {
    route: '/product',
    label: 'Product',
    id: '/product',
  },
  {
    route: '/marketing',
    label: 'Marketing',
    id: '/marketing',
  },
  {
    route: '/components',
    label: 'Components',
    id: '/components',
  },
];

const componentsSideNav = [
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Buttons',
    id: 'components/buttons',
    url: '/components/buttons',
  },
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Typography',
    id: 'components/typography',
    url: '/components/typography',
  },
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Grid',
    id: 'components/grid',
    url: '/components/grid',
  },
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Spacing',
    id: 'components/spacing',
    url: '/components/spacing',
  },
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Colors',
    id: 'components/colors',
    url: '/components/colors',
  },
  {
    type: SIDE_NAV_ITEM_TYPES.ListItem,
    label: 'Breadcrumbs',
    id: 'components/breadcrumbs',
    url: '/components/breadcrumbs',
  },
];

export const SIDE_NAV_ROUTES = {
  '/components': componentsSideNav,
};
