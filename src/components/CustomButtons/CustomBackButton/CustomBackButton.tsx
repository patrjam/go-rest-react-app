import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../../colors/Colors";

const StyledCustomBackButton = styled.button`
  width: 99px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.royalBlue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.95rem;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin: 80px auto;
  float: right;
  margin-right: 15rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.grey};
  }
`;

const StyledLogoLink = styled(Link)`
  height: 100%;
  width: 40px;
  padding: 25px;
`;

export const CustomBackButton = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => (
  <ThemeProvider theme={CustomColors}>
    <StyledLogoLink to={url}>
      <StyledCustomBackButton>{children}</StyledCustomBackButton>
    </StyledLogoLink>
  </ThemeProvider>
);
