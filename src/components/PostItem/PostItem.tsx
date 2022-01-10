import React from "react";
import CustomDetailButton from "../CustomButtons/CustomDetailButton/CustomDetailButton";
import styled from "styled-components";

const StyledRowId = styled.td`
  color: #db5437;
`;

type PostItemProps = {
  id: number;
  title: string;
};

const PostItem = ({ id, title }: PostItemProps) => (
  <tr className="postItem">
    <StyledRowId className="contentId">{id}</StyledRowId>
    <td className="contentTitle">{title}</td>
    <td className="contentButton">
      <CustomDetailButton>Detail</CustomDetailButton>
    </td>
  </tr>
);

export default PostItem;
