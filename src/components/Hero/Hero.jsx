import {
  HeroSection,
  HeroWrapper,
  Logo,
  HeroMainText,
  Text,
  Icon,
} from 'components/Hero/Hero.styled.jsx';
import { Container } from 'GlobalStyles';
import logo from '../../images/old/Guest-House-Logotype-Light-Horizontal.svg';
import icon from '../../images/old/Frame.svg';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroWrapper>
          <Logo src={logo} alt="logo" />
          <HeroMainText>
            Experience the perfect combination of modern housing & natural
            scenery.
          </HeroMainText>
          <Text>Located in Lofoten, norway</Text>

          <Icon src={icon} alt="" />
        </HeroWrapper>
      </Container>
    </HeroSection>
  );
};
