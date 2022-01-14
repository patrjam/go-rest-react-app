import React from "react";
import { CustomDetailButton } from "../CustomButtons/CustomDetailButton/CustomDetailButton";
import colors from "styled-components";
import { ThemeProvider } from "styled-components";
import { CustomColors } from "../../colors/Colors";

const StyledRowId = colors.td`
  color: ${(props) => props.theme.colors.salmon};
`;

type PostItemProps = {
  id: number;
  title: string;
};

export const PostItem = ({ id, title }: PostItemProps) => (
  <tr>
    <ThemeProvider theme={CustomColors}>
      <StyledRowId>{id}</StyledRowId>
    </ThemeProvider>

    <td>{title}</td>
    <td>
      <CustomDetailButton>Detail</CustomDetailButton>
    </td>
  </tr>
);
