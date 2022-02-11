import React from 'react';
import styled from 'styled-components';
import { responseMessages } from '../../constants/responseMessages';

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
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
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
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
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
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

type AlertMessageProps = {
  responseStatus: number;
  isOpen: boolean;
};

export const AlertMessage = (props: AlertMessageProps) => {
  switch (props.responseStatus) {
    case 200:
    case 201:
    case 204:
      return (
        <SuccessDivMessage isOpen={props.isOpen}>
          {responseMessages[props.responseStatus]}
        </SuccessDivMessage>
      );
    case 304:
    case 403:
    case 405:
    case 415:
    case 429:
      return (
        <WarningDivMessage isOpen={props.isOpen}>
          {responseMessages[props.responseStatus]}
        </WarningDivMessage>
      );
    default:
      return (
        <ErrorDivMessage isOpen={props.isOpen}>
          {responseMessages[props.responseStatus]}
        </ErrorDivMessage>
      );
  }
};
