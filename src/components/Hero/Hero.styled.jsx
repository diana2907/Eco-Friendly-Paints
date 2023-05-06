import styled from 'styled-components';
import background from '../../images/background.jpg';

export const HeroSection = styled.section`
  padding: 168px 0 95px 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-color: #faf8f0;
  text-align: center;
`;

export const HeroWrapper = styled.div``;

export const HeroMainText = styled.p`
  margin-bottom: 33px;

  font-size: 48px;
  line-height: 1.1;

  color: #ffffff;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Logo = styled.img`
  width: 256px;
  height: 90px;
  margin: 0 auto;
  margin-bottom: 37px;
`;

export const Icon = styled.img`
  width: 256px;
  height: 90px;
  margin: 0 auto;
  margin-top: 37px;
`;
