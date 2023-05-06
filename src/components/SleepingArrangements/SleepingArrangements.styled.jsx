import styled from 'styled-components';

export const SleepingArrangementsSection = styled.section`
  padding: 100px 0 100px 0;
  color: #52503b;
  text-align: center;
  background: #faf8f0;
`;

export const TitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.12;
`;

export const TitleText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  max-width: 346px;

  &:not(:last-child) {
    margin-right: 64px;
  }
`;

export const Icon = styled.img`
  margin-bottom: 12px;
  height: 64px;
`;

export const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const ItemText = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;
