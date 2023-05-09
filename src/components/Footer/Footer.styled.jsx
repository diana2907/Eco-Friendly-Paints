import styled from 'styled-components';

export const FooterSection = styled.section`
  padding: 100px 0 100px 0;
  color: #ffffff;
  background: #52503b;
`;
export const FooterWrapper = styled.div``;

export const Pages = styled.div`
  margin-right: 207px;
`;

export const Title = styled.h5`
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const List = styled.ul`
  font-size: 14px;
  line-height: 1.43;
  color: #ffffff;
`;

export const SocList = styled.ul`
  display: flex;
  font-size: 14px;
  line-height: 1.43;
  color: #ffffff;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Socials = styled.div`
  min-width: 136px;
  margin-right: 160px;
`;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

export const SocItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Newsletter = styled.div``;

export const Text = styled.p`
  margin-bottom: 12px;
`;

export const Input = styled.input`
  padding: 16px 30px;
  width: 100%;
  font-family: 'Montserrat';
  margin: 0;
  box-sizing: border-box;

  font-size: 14px;
  line-height: 1.43;
  color: #52503b;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;
export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 11px;
  right: 7px;

  padding: 5px;
  background: #52503b;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  line-height: 1.43;
  color: #ffffff;
`;

export const MainBox = styled.div`
  display: flex;
  margin-bottom: 47px;
`;

export const DownBox = styled.div`
  display: grid;
  grid-row-gap: 20px;
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: #ffffff;
`;

export const LogoIcon = styled.img`
  width: 200px;
  margin: 0 auto;
`;

export const Authors = styled.p``;

export const Contacts = styled.p``;
