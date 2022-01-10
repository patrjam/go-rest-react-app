import React from "react";
import styled from "styled-components";

const StyledCustomDetailButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: #4fc9da;
  color: white;
  border-radius: 0.95rem;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 13px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e4e6ef;
    color: black;
    border: 1px solid #e4e6ef;
  }
`;

const CustomDetailButton = ({ children }: any) => (
  <StyledCustomDetailButton>{children}</StyledCustomDetailButton>
);

export default CustomDetailButton;
