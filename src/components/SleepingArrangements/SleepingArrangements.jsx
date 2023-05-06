import {
  SleepingArrangementsSection,
  TitleWrapper,
  Title,
  TitleText,
  List,
  Item,
  Icon,
  ItemTitle,
  ItemText,
} from 'components/SleepingArrangements/SleepingArrangements.styled.jsx';
import { Container, Wrapper } from 'GlobalStyles';
import chair from '../../images/old/Bed-Icon.svg';
import bed from '../../images/old/bedroom.svg';
import bathroom from '../../images/old/Bath-Tub-Icon.svg';

export const SleepingArrangements = () => {
  return (
    <SleepingArrangementsSection>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>Sleeping arrangements.</Title>
            <TitleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
            </TitleText>
          </TitleWrapper>
          <List>
            <Item>
              <Icon src={chair} alt="chair" />
              <ItemTitle>Beds</ItemTitle>
              <ItemText>
                The cabin is equipped with 12 beds, 4 of which are in bunk. The
                rent includes linens for all beds.
              </ItemText>
            </Item>
            <Item>
              <Icon src={bed} alt="bed" />
              <ItemTitle>Bedrooms</ItemTitle>
              <ItemText>
                Spread out over two floors, the cabin offers 4 bedrooms. Ranging
                from 2 to 4 beds per room.
              </ItemText>
            </Item>
            <Item>
              <Icon src={bathroom} alt="kitchen" />
              <ItemTitle>Bathrooms</ItemTitle>
              <ItemText>
                The cabin has three bathrooms, all equipped with showers and one
                with a bath tub,
              </ItemText>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </SleepingArrangementsSection>
  );
};
