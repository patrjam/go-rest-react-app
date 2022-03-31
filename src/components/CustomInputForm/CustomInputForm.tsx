import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../PostDetail/PostDetail';

const StyledInput = styled.input`
  font-size: 16px;
  padding: 15px 10px 5px 5px;
  display: block;
  width: 90%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  margin: 25px 0;
`;

type CustomInputFormType = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
  ;

export const CustomFormInput = ({
  label,
  ...otherProps
}: CustomInputFormType) => (
  <StyledDiv>
    <StyledInput {...otherProps} />
    {label && <label>{label}</label>}
  </StyledDiv>
);
