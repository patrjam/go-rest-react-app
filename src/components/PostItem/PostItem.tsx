import React from "react";
import {CustomDetailButton} from "../CustomButtons/CustomDetailButton/CustomDetailButton";
import colors from "styled-components";

const StyledRowId = colors.td`
  color: #db5437;
`;

type PostItemProps = {
  id: number;
  title: string;
};

export const PostItem = ({ id, title }: PostItemProps) => (
  <tr className="postItem">
    <StyledRowId className="contentId">{id}</StyledRowId>
    <td className="contentTitle">{title}</td>
    <td className="contentButton">
      <CustomDetailButton>Detail</CustomDetailButton>
    </td>
  </tr>
);

