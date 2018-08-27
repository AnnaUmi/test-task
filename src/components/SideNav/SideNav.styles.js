import styled from 'styled-components';

export const SideNavContainer = styled.div`
  width: 200px;
  min-height: 200px;
  height: fit-content;
  background-color: #939393;
`;

export const SideNavListItemStyled = styled.div`
  padding: 20px 30px;
  font-size: 20px;
  cursor: pointer;
  ${({ isActive }) => (isActive === true ? 'background-color: #7e7e7e; font-weight: bold;' : '')};

  :hover {
    background-color: #bdbdbd;
  }
`;

export const SideNavSubMenuListemStyled = styled.div`
  padding: 20px 60px;
  font-size: 18px;
  cursor: pointer;
  ${({ isActive }) => (isActive === true ? 'background-color: #7e7e7e; font-weight: bold;' : '')};

  :hover {
    background-color: #bdbdbd;
  }
`;

export const SubMenuListItemContainer = styled.div`
  background-color: #d3d3d3;
  ${({ isOpened }) => (isOpened === true ? '' : 'height: 0; overflow: hidden;')};
`;
