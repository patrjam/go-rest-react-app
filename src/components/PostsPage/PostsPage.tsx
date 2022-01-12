import React from "react";
import { PostItem } from "../PostItem/PostItem";
import { CustomCreateButton } from "../CustomButtons/CustomCreateButton/CustomCreateButton";
import { bearerTokenAuth } from "../../configs/bearerTokenAuth";
import { endpoints } from "../../configs/endpoints";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledTable = styled.table`
  margin-left: 10%;
`;

type PostsPageProps = {
  id: number;
  title: string;
};

type Props = {};
type State = {
  posts: PostsPageProps[];
};
class PostsPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async fetchResponseJSON() {
    const response = await fetch(endpoints.POSTS, bearerTokenAuth);
    return await response.json();
  }

  async componentDidMount() {
    const response = await this.fetchResponseJSON();
    this.setState({ posts: response.data });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <StyledH1>POSTS PAGE</StyledH1>
        <CustomCreateButton>Create post</CustomCreateButton>
        <br />
        <br />
        <StyledTable>
          <tbody>
            {posts.map(({ id, title }) => (
              <PostItem key={id} id={id} title={title} />
            ))}
          </tbody>
        </StyledTable>
      </div>
    );
  }
}

export default PostsPage;
