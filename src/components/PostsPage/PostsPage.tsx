import React, { useEffect, useState } from "react";
import { PostItem } from "../PostItem/PostItem";
import { CustomCreateButton } from "../CustomButtons/CustomCreateButton/CustomCreateButton";
import { bearerTokenAuthorization } from "../../configs/bearerTokenAuthorization";
import { apiEndpoints } from "../../configs/apiEndpoints";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appRoutesList } from "../../configs/appRoutesList";
import { NoDataFound } from "../NoDataFound/NoDataFound";

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

type State = {
  posts: PostsPageProps[];
};
export const PostsPage = () => {
  const [allPosts, setAllPosts] = useState<State>({ posts: [] });
  const [responseFetchError, setResponseFetchError] = useState(false);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch(
          apiEndpoints.POSTS,
          bearerTokenAuthorization
        );
        const resJson = await response.json();
        setAllPosts({ posts: resJson.data });
      } catch (error) {
        setResponseFetchError(true);
      }
    };
    fetchFunc();
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
