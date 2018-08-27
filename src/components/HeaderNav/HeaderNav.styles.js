import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #d3d3d3;
  padding: 0 20px;
  height: 60px;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  border: 1px dashed #696969;
  padding: 5px 0;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  margin-left: 40px;
  display: flex;
`;

export const NavItem = styled.div`
  margin-left: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-left: 0;
  }

  :after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    margin-top: 2px;
    background-color: ${({ isActive }) => (isActive ? 'blue' : 'rgba(0,0,0,0)')};
  }

  :hover {
    :after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      visibility: 'visible';
      background-color: ${({ isActive }) => (isActive ? 'blue' : '#696969')};
    }
  }
`;
