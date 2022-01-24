import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../colors/Colors";

type DivMessageProps = {
  isOpen: boolean;
};

const WarningDivMessage = styled.div<DivMessageProps>`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: ${(props) => props.theme.colors.softYellow};
  color: ${(props) => props.theme.colors.olive};
  background-color: ${(props) => props.theme.colors.lightYellow};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.2s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const ErrorDivMessage = styled.div<DivMessageProps>`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: ${(props) => props.theme.colors.softRed};
  color: ${(props) => props.theme.colors.burgundy};
  background-color: ${(props) => props.theme.colors.lightRed};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.2s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const SuccessDivMessage = styled.div<DivMessageProps>`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: ${(props) => props.theme.colors.softGreen};
  color: ${(props) => props.theme.colors.darkGreen};
  background-color: ${(props) => props.theme.colors.lightGreen};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.2s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const AlertMessage = ({
  responseStatus,
  isOpen,
}: {
  responseStatus: number;
  isOpen: boolean;
}) => {
  <ThemeProvider theme={CustomColors}></ThemeProvider>;

  switch (responseStatus) {
    case 200:
      return (
        <ThemeProvider theme={CustomColors}>
          <SuccessDivMessage isOpen={isOpen}>
            OK. Everything worked as expected.
          </SuccessDivMessage>
        </ThemeProvider>
      );
    case 201:
      return (
        <ThemeProvider theme={CustomColors}>
          <SuccessDivMessage isOpen={isOpen}>
            A resource was successfully created.
          </SuccessDivMessage>
        </ThemeProvider>
      );
    case 204:
      return (
        <ThemeProvider theme={CustomColors}>
          <SuccessDivMessage isOpen={isOpen}>
            The request was handled successfully and the response contains no
            body content.
          </SuccessDivMessage>
        </ThemeProvider>
      );
    case 304:
      return (
        <ThemeProvider theme={CustomColors}>
          <WarningDivMessage isOpen={isOpen}>
            The resource was not modified. You can use the cached version.
          </WarningDivMessage>
        </ThemeProvider>
      );
    case 400:
      return (
        <ThemeProvider theme={CustomColors}>
          <ErrorDivMessage isOpen={isOpen}>Bad request.</ErrorDivMessage>;
        </ThemeProvider>
      );
    case 401:
      return (
        <ThemeProvider theme={CustomColors}>
          <ErrorDivMessage isOpen={isOpen}>
            Authentication failed.
          </ErrorDivMessage>
        </ThemeProvider>
      );
    case 403:
      return (
        <ThemeProvider theme={CustomColors}>
          <WarningDivMessage isOpen={isOpen}>
            The authenticated user is not allowed to access the specified API
            endpoint.
          </WarningDivMessage>
        </ThemeProvider>
      );
    case 404:
      return (
        <ThemeProvider theme={CustomColors}>
          <ErrorDivMessage isOpen={isOpen}>
            The requested resource does not exist.
          </ErrorDivMessage>
        </ThemeProvider>
      );
    case 405:
      return (
        <ThemeProvider theme={CustomColors}>
          <WarningDivMessage isOpen={isOpen}>
            Method not allowed. Please check the Allow header for the allowed
            HTTP methods.
          </WarningDivMessage>
        </ThemeProvider>
      );
    case 415:
      return (
        <ThemeProvider theme={CustomColors}>
          <WarningDivMessage isOpen={isOpen}>
            Unsupported media type. The requested content type or version number
            is invalid.
          </WarningDivMessage>
        </ThemeProvider>
      );
    case 422:
      return (
        <ThemeProvider theme={CustomColors}>
          <ErrorDivMessage isOpen={isOpen}>
            Data validation failed.
          </ErrorDivMessage>
        </ThemeProvider>
      );
    case 429:
      return (
        <ThemeProvider theme={CustomColors}>
          <WarningDivMessage isOpen={isOpen}>
            Too many requests. The request was rejected due to rate limiting.
          </WarningDivMessage>
        </ThemeProvider>
      );
    case 500:
      return (
        <ThemeProvider theme={CustomColors}>
          <ErrorDivMessage isOpen={isOpen}>
            Internal server error.
          </ErrorDivMessage>
        </ThemeProvider>
      );
  }

  return <div></div>;
};
