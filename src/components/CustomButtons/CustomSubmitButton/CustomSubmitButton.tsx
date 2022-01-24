import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../../colors/Colors";

const StyledCustomSubmitButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.lime};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.95rem;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin: 80px auto;
  float: right;
  margin-right: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.grey};
  }
`;

export const CustomSubmitButton = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ThemeProvider theme={CustomColors}>
    <StyledCustomSubmitButton>{children}</StyledCustomSubmitButton>
  </ThemeProvider>
);
