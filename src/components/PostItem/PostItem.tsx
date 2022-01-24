import React from "react";
import { CustomDetailButton } from "../CustomButtons/CustomDetailButton/CustomDetailButton";
import colors from "styled-components";

const StyledRowId = colors.td`
  color: ${(props) => props.theme.colors.salmon};
`;

type PostItemProps = {
  id: number;
  title: string;
};

export const PostItem = ({ id, title }: PostItemProps) => (
  <tr>
    <StyledRowId>{id}</StyledRowId>

    <td>{title}</td>
    <td>
      <CustomDetailButton>Detail</CustomDetailButton>
    </td>
  </tr>
);
