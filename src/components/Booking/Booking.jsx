import {
  BookingSection,
  TitleWrapper,
  Title,
  TitleText,
  List,
  Item,
  ContactBtn,
  BookBtn,
} from 'components/Booking/Booking.styled.jsx';
import { Container, Wrapper } from 'GlobalStyles';

export const Booking = () => {
  return (
    <BookingSection>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>
              We're already booked up for the spring — hurry up & secure your
              stay for the summer.
            </Title>
            <TitleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus.
            </TitleText>
          </TitleWrapper>

          <List>
            <Item>
              <ContactBtn>Contact</ContactBtn>
            </Item>

            <Item>
              <BookBtn>Book now</BookBtn>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </BookingSection>
  );
};
