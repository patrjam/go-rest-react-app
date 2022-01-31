import React from "react";

import styled from "styled-components";

const StyledCustomCreateButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.salmon};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.95rem;
  font-family: "Poppins";
  font-size: 13px;
  border: none;
  cursor: pointer;
  margin-left: 10%;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors.grey};
  }
`;

export const CustomCreateButton = (props: { children: React.ReactNode }) => (
  <StyledCustomCreateButton>{props.children}</StyledCustomCreateButton>
);
