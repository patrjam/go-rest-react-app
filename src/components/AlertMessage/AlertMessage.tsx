import React from "react";
import styled from "styled-components";
import { responseMessages } from "../../constants/responseMessages";

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
  if (responseStatus < 300) {
    return (
      <SuccessDivMessage isOpen={isOpen}>
        {responseMessages[responseStatus]}
      </SuccessDivMessage>
    );
  } else if (
    responseStatus === 304 ||
    responseStatus === 403 ||
    responseStatus === 405 ||
    responseStatus === 415 ||
    responseStatus === 429
  ) {
    return (
      <WarningDivMessage isOpen={isOpen}>
        {responseMessages[responseStatus]}
      </WarningDivMessage>
    );
  } else
    return (
      <ErrorDivMessage isOpen={isOpen}>
        {responseMessages[responseStatus]}
      </ErrorDivMessage>
    );
};
