import styled from 'styled-components';

export const HeaderSection = styled.header`
  background-color: #52503b;
  padding: 18px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 128px;
  height: 45px;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  font-size: 15px;
  line-height: 1.33;
  color: #ffffff;

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Button = styled.button`
  padding: 11px 18px;

  background: #ffffff;
  border-radius: 6px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #52503b;
`;
