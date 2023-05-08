import { Container, Wrapper } from 'GlobalStyles';
import {
  PastGuestsSection,
  TitleWrapper,
  Title,
  TitleText,
  Image,
} from 'components/PastGuests/PastGuests.styled.jsx';
import img from '../../images/background-bedroom.jpg';

export const PastGuests = () => {
  return (
    <PastGuestsSection>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>Past guests.</Title>
            <TitleText>
              Don't take our word for it! Have a look at what our previous
              guests say about their stay at the Guest House.
            </TitleText>
          </TitleWrapper>
        </Wrapper>
      </Container>
      <Image src={img} alt="bedroom" />
    </PastGuestsSection>
  );
};
