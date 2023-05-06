import {
  MainTitleSection,
  MainTtl,
  Image,
} from 'components/MainTitle/MainTitle.styled.jsx';
import { Container, Wrapper } from 'GlobalStyles';
import img from '../../images/background-kitchen.jpg';

export const MainTitle = () => {
  return (
    <MainTitleSection>
      <Container>
        <Wrapper>
          <MainTtl>
            The Guest House is the perfect weekend getaway cabin.
          </MainTtl>
        </Wrapper>
      </Container>
      <Image src={img} alt="kitchen" />
    </MainTitleSection>
  );
};
