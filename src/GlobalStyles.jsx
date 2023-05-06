import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    margin-bottom: 32px;
    width: 42px;
    height: 8px;

    background-color: #e08631;
  }
`;
