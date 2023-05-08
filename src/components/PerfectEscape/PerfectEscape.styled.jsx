import styled from 'styled-components';

export const PerfectEscapeSection = styled.section`
  padding: 100px 0 100px 0;
`;
export const Wrapper = styled.div`
  &::before {
    content: '';
    display: block;
    margin-bottom: 32px;
    width: 42px;
    height: 8px;

    background-color: #e08631;
  }
`;

export const TitleWrapper = styled.div`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 42px;
  grid-column-gap: 32px;
`;

export const Item = styled.li`
  display: flex;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;

  margin-right: 16px;
`;

export const ItemBox = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: #333333;
`;

export const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #333333;
`;

export const ItemText = styled.p``;
