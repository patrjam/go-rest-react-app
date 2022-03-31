import styled from 'styled-components';
import { StyledLogoLink } from '../CustomBackButton/CustomBackButton';

export const StyledCustomDetailButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.skyBlue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.95rem;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-size: 13px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.grey};
  }
`;

export const CustomDetailButton = (props: {
  children: React.ReactNode;
  url: string;
  onClick?: React.MouseEventHandler;
}) => (
  <StyledLogoLink to={props.url}>
    <StyledCustomDetailButton onClick={props.onClick}>
      {props.children}
    </StyledCustomDetailButton>
  </StyledLogoLink>
);
