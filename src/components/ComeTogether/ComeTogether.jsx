import {
  ComeTogetherSection,
  Wrapper,
  ComeTogetherWrapper,
  TitleWrapper,
  Title,
  TitleText,
  List,
  Item,
  Icon,
  ItemText,
} from 'components/ComeTogether/ComeTogether.styled.jsx';
import { Container } from 'GlobalStyles';
import wifi from '../../images/old/wi-fi.svg';
import bread from '../../images/old/bread.svg';
import roler from '../../images/old/roler.svg';
import cutleries from '../../images/old/cutleries.svg';

export const ComeTogether = () => {
  return (
    <ComeTogetherSection>
      <Container>
        <ComeTogetherWrapper>
          <Wrapper>
            <TitleWrapper>
              <Title>Come together.</Title>
              <TitleText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus.
              </TitleText>
            </TitleWrapper>
          </Wrapper>
          <List>
            <Item>
              <Icon src={wifi} alt="wifi" />
              <ItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ItemText>
            </Item>
            <Item>
              <Icon src={bread} alt="bread" />
              <ItemText>Nullam scelerisque aliquam odio et faucibus.</ItemText>
            </Item>
            <Item>
              <Icon src={roler} alt="roler" />
              <ItemText>Nulla rhoncus feugiat eros quis consectetur.</ItemText>
            </Item>
            <Item>
              <Icon src={cutleries} alt="cutleries" />
              <ItemText>Morbi neque ex, condimentum.</ItemText>
            </Item>
          </List>
        </ComeTogetherWrapper>
      </Container>
    </ComeTogetherSection>
  );
};
