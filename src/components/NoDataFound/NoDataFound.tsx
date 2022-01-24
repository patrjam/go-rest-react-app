import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../colors/Colors";

const NoDataFoundDiv = styled.div`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.softGrey};
  border-color: ${(props) => props.theme.colors.lightGrey};
`;

export const NoDataFound = () => (
  <ThemeProvider theme={CustomColors}>
    <NoDataFoundDiv>Something went wrong. No data found.</NoDataFoundDiv>
  </ThemeProvider>
);
