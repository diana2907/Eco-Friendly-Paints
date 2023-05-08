import { Container } from 'GlobalStyles';
import {
  FooterSection,
  FooterWrapper,
  Pages,
  Title,
  List,
  Item,
  Socials,
  Icon,
  SocList,
  SocItem,
  Newsletter,
  Text,
  Input,
  Button,
  Form,
} from 'components/Footer/Footer.styled.jsx';
import telegram from '../../images/old/soc-telegram.svg';
import facebook from '../../images/old/facebook.svg';
import inst from '../../images/old/inst.svg';

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <Pages>
            <Title>Pages</Title>
            <List>
              <Item>Start</Item>
              <Item>Contact</Item>
              <Item>Our history</Item>
              <Item>Licenses</Item>
              <Item>Instructions</Item>
              <Item>Style guide</Item>
            </List>
          </Pages>

          <Socials>
            <Title>Social Media</Title>
            <SocList>
              <SocItem>
                <Icon src={telegram} alt="telegram" />
              </SocItem>
              <SocItem>
                <Icon src={facebook} alt="facebook" />
              </SocItem>
              <SocItem>
                <Icon src={inst} alt="inst" />
              </SocItem>
            </SocList>
          </Socials>

          <Newsletter>
            <Title>Newsletter</Title>
            <Text>
              Lorem i psum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </Text>
            <Form>
              <Input name="email" type="email" placeholder="Email" />
              <Button type="submit">Submit</Button>
            </Form>
          </Newsletter>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};
