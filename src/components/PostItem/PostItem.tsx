import React from 'react';
import { StyledCustomDetailButton } from '../CustomButtons/CustomDetailButton/StyledCustomDetailButton';
import colors from 'styled-components';

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
      <StyledCustomDetailButton>Detail</StyledCustomDetailButton>
    </td>
  </tr>
);
