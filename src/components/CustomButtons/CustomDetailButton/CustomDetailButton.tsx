import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../../colors/Colors";

const StyledCustomDetailButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.skyBlue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.95rem;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 13px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.grey};
  }
`;

export const CustomDetailButton = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={CustomColors}>
    <StyledCustomDetailButton>{children}</StyledCustomDetailButton>
  </ThemeProvider>
);
