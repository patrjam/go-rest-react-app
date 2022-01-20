import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { CustomColors } from "../../colors/Colors";

const StyledInput = styled.input`
  font-size: 16px;
  padding: 15px 10px 5px 5px;
  display: block;
  width: 90%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  margin: 25px 0;
`;

export const CustomFormInput = ({
  handleChange,
  label,
  ...otherProps
}: any) => (
  <ThemeProvider theme={CustomColors}>
    <StyledInput onChange={handleChange} {...otherProps} />
    {label ? <label>{label}</label> : null}
  </ThemeProvider>
);
