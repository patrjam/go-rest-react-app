import React, { useEffect, useState } from "react";
import { PostItem } from "../PostItem/PostItem";
import { CustomCreateButton } from "../CustomButtons/CustomCreateButton/CustomCreateButton";
import { apiEndpoints } from "../../configs/apiEndpoints";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appRoutesList } from "../../configs/appRoutesList";
import { NoDataFound } from "../NoDataFound/NoDataFound";
import { customFetch } from "../../customFunctions/customFetch";

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledTable = styled.table`
  margin: auto;
`;

type PostsPageProps = {
  id: number;
  title: string;
};

type Posts = {
  posts: PostsPageProps[];
};
export const PostsPage = () => {
  const [allPosts, setAllPosts] = useState<Posts>({ posts: [] });
  const [responseFetchError, setResponseFetchError] = useState(false);

  useEffect(() => {
    const handleGetPostsData = async () => {
      try {
        const [data, response] = await customFetch<Posts["posts"]>(
          apiEndpoints.POSTS,
          {
            method: "GET",
          }
        );
        setAllPosts({ posts: data.data });
      } catch (error) {
        setResponseFetchError(true);
      }
    };
    handleGetPostsData();
  }, []);

  return (
    <div>
      <StyledH1>POSTS PAGE</StyledH1>
      <Link to={appRoutesList.newPostUrl}>
        <CustomCreateButton>Create post</CustomCreateButton>
      </Link>
      <br />
      <br />
      {responseFetchError ? (
        <NoDataFound />
      ) : (
        <StyledTable>
          <tbody>
            {allPosts.posts.map(({ id, title }) => (
              <PostItem key={id} id={id} title={title} />
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};
