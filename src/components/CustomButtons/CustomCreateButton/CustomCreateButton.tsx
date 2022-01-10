import React from "react";
import styled from "styled-components";

const StyledCustomCreateButton = styled.button`
  width: 115px;
  height: 35px;
  background-color: #db5437;
  color: white;
  border-radius: 0.95rem;
  font-family: "Poppins";
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin-left: 900px;

  &:hover {
    background-color: #e4e6ef;
    color: black;
    border: 1px solid #e4e6ef;
  }
`;

const CustomCreateButton = ({ children }: any) => (
  <StyledCustomCreateButton>{children}</StyledCustomCreateButton>
);

export default CustomCreateButton;
