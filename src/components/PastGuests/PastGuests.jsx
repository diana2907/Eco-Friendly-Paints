import { Container, Wrapper } from 'GlobalStyles';
import SimpleSlider from 'components/Views/Views';
import {
  PastGuestsSection,
  TitleWrapper,
  Title,
  TitleText,
  Image,
  Box,
} from 'components/PastGuests/PastGuests.styled.jsx';
import img from '../../images/background-bedroom.jpg';

export const PastGuests = () => {
  return (
    <PastGuestsSection>
      <Container>
        <Box>
          <Wrapper>
            <TitleWrapper>
              <Title>Past guests.</Title>
              <TitleText>
                Don't take our word for it! Have a look at what our previous
                guests say about their stay at the Guest House.
              </TitleText>
            </TitleWrapper>
            <SimpleSlider />
          </Wrapper>
        </Box>
      </Container>
      <Image src={img} alt="bedroom" />
    </PastGuestsSection>
  );
};
