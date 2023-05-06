import {
  PerfectEscapeSection,
  TitleWrapper,
  Title,
  TitleText,
  List,
  Item,
  Icon,
  ItemTitle,
  ItemText,
} from 'components/PerfectEscape/PerfectEscape.styled.jsx';
import { Container, Wrapper } from 'GlobalStyles';
import kitchen from '../../images/old/modrn-kitchen.svg';
import trees from '../../images/old/outdoor-paths.svg';
import coffee from '../../images/old/Coffee-Maker-Icon.svg';
import mountings from '../../images/old/natural-scenery.svg';
import conditioner from '../../images/old/air-condition.svg';
import storage from '../../images/old/storage-solutions.svg';
import cutlery from '../../images/old/cutlery selection.svg';
import pizza from '../../images/old/take-away.svg';

export const PerfectEscape = () => {
  return (
    <PerfectEscapeSection>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>The perfect escape.</Title>
            <TitleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
            </TitleText>
          </TitleWrapper>
          <List>
            <Item>
              <Icon src={kitchen} alt="kitchen" />
              <ItemTitle>Modern Kitchen Appliances</ItemTitle>
              <ItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </ItemText>
            </Item>
            <Item>
              <Icon src={trees} alt="trees" />
              <ItemTitle>Outdoor Paths</ItemTitle>
              <ItemText>Nulla rhoncus feugiat eros quis consectetur.</ItemText>
            </Item>
            <Item>
              <Icon src={coffee} alt="coffee" />
              <ItemTitle>Coffee Maker</ItemTitle>
              <ItemText>
                Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
                ultrices, ut faucibus orci tincidunt.
              </ItemText>
            </Item>

            <Item>
              <Icon src={mountings} alt="mountings" />
              <ItemTitle>Natural Scenery</ItemTitle>
              <ItemText>
                Cras commodo consequat orci, in convallis risus egestas non.
              </ItemText>
            </Item>

            <Item>
              <Icon src={conditioner} alt="conditioner" />
              <ItemTitle>Air Conditioner</ItemTitle>
              <ItemText>Nullam scelerisque aliquam odio et faucibus.</ItemText>
            </Item>

            <Item>
              <Icon src={storage} alt="storage" />
              <ItemTitle>Storage Solutions</ItemTitle>
              <ItemText>
                Morbi neque ex, condimentum dapibus congue et, vulputate ut
                ligula.
              </ItemText>
            </Item>

            <Item>
              <Icon src={cutlery} alt="cutlery" />
              <ItemTitle>Cutlery Selection</ItemTitle>
              <ItemText>Duis tristique sed lorem a vestibulum.</ItemText>
            </Item>

            <Item>
              <Icon src={pizza} alt="pizza" />
              <ItemTitle>Take-away Options</ItemTitle>
              <ItemText>
                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
                libero ac, cursus quam.
              </ItemText>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </PerfectEscapeSection>
  );
};
