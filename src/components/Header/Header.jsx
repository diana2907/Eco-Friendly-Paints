import logo from '../../images/old/Guest-House-Logotype-Light-Horizontal.svg';
import {
  HeaderSection,
  Logo,
  NavItem,
  Button,
  HeaderWrapper,
  NavList,
} from 'components/Header/Header.styled.jsx';
import { Container } from 'GlobalStyles';

export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <div className="logo">
            <Logo src={logo} alt="" />
          </div>

          <nav>
            <NavList>
              <NavItem>Start</NavItem>
              <NavItem>Contact</NavItem>
              <NavItem>Our history</NavItem>
            </NavList>
          </nav>

          <Button type="button">Book now</Button>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};
