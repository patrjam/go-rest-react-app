import React from 'react';
import { CustomDetailButton } from '../CustomButtons/CustomDetailButton/StyledCustomDetailButton';
import colors from 'styled-components';
import { appRoutesList } from '../../configs/appRoutesList';

const StyledRowId = colors.td`
  color: ${(props) => props.theme.colors.salmon};
`;

type PostItemProps = {
  id: number;
  title: string;
};

export const PostItem = ({ id, title }: PostItemProps) => {
  return (
    <tr>
      <StyledRowId>{id}</StyledRowId>

      <td>{title}</td>
      <td>
        <CustomDetailButton url={`${appRoutesList.postDetail}/${id}`}>
          Detail
        </CustomDetailButton>
      </td>
    </tr>
  );
};
