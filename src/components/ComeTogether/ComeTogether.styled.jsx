import styled from 'styled-components';

export const ComeTogetherSection = styled.section`
  padding: 100px 0 100px 0;
  color: #52503b;
`;

export const ComeTogetherWrapper = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  margin-right: 64px;
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
  gap: 32px 32px;
`;

export const Item = styled.li`
  display: flex;
  max-width: 260px;

  font-size: 14px;
  line-height: 1.43;
  color: #333333;
`;

export const Icon = styled.img`
  margin-right: 16px;
  height: 36px;
  width: 36px;
`;

export const ItemText = styled.p``;
