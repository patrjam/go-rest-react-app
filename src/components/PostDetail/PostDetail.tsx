import React, { useEffect, useState } from 'react';
import { CustomFormInput } from '../CustomInputForm/CustomInputForm';
import styled from 'styled-components';
import { CustomBackButton } from '../CustomButtons/CustomBackButton/CustomBackButton';
import { appRoutesList } from '../../configs/appRoutesList';
import { StyledH1 } from '../PostsPage/PostsPage';
import { useParams } from 'react-router-dom';
import { NoDataFound } from '../NoDataFound/NoDataFound';
import { getPost, Post } from '../../services/postServices';

const StyledTextarea = styled.textarea`
  font-size: 16px;
  padding: 15px 10px 5px 5px;
  display: block;
  width: 90%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  margin: 25px 0;
  font-family: "Poppins";
  resize: none;
`;

export const StyledDiv = styled.div`
  padding: 2% 0;
`;

type CustomTextareaType = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const CustomTextarea = ({
  label,
  ...otherProps
}: CustomTextareaType) => (
  <StyledDiv>
    <StyledTextarea {...otherProps}></StyledTextarea>
    {label && <label>{label}</label>}
  </StyledDiv>
);

export const PostDetail = () => {
  const [postDetail, setPostDetail] = useState<Post>({
    post: {
      id: 0,
      user_id: 0,
      title: '',
      body: '',
    },
  });
  const [responseFetchError, setResponseFetchError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const handleGetResponse = async () => {
      try {
        const [data, response] = await getPost(id);
        setPostDetail({ post: data });
      } catch (error) {
        setResponseFetchError(true);
      }
    };
    handleGetResponse();
  }, []);

  return (
    <div>
      <StyledH1>POST DETAIL</StyledH1>
      {responseFetchError ? (
        <NoDataFound />
      ) : (
        <>
          <CustomFormInput
            label={'ID'}
            readOnly={true}
            value={postDetail.post.id}
          />
          <CustomFormInput
            label={'User ID'}
            readOnly={true}
            value={postDetail.post.user_id}
          />
          <CustomFormInput
            label={'Title'}
            readOnly={true}
            value={postDetail.post.title}
          />
          <CustomTextarea
            label={'Body'}
            readOnly={true}
            value={postDetail.post.body}
          ></CustomTextarea>
        </>
      )}
      <CustomBackButton url={appRoutesList.postsUrl}>Back</CustomBackButton>
    </div>
  );
};
