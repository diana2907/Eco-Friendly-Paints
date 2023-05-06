import {
  AboutSection,
  TextWrapper,
  Right,
  Text,
  Left,
  Button,
} from 'components/About/About.styled.jsx';
import { Container, Wrapper } from 'GlobalStyles';

export const About = () => {
  return (
    <AboutSection>
      <Container>
        <Wrapper>
          <TextWrapper>
            <Left>
              <Text>
                The Guest House is the perfect weekend get-away housing. Located
                in the Norwegian archipelago, Lofoten, it's a great escape from
                the hustle and bustle of the city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam scelerisque aliquam odio et
                faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi
                neque ex, condimentum dapibus congue et, vulputate ut ligula.
              </Text>
            </Left>

            <Right>
              <Text>
                Below you'll find information about the accommodation and what's
                included in the price. Don't hesitate to reach out to us vi the
                contact page if you have any questions around your stay.
              </Text>
              <Button>Book now</Button>
            </Right>
          </TextWrapper>
        </Wrapper>
      </Container>
    </AboutSection>
  );
};
