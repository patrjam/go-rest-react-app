import React from "react";
import { PostItem } from "../PostItem/PostItem";
import { CustomCreateButton } from "../CustomButtons/CustomCreateButton/CustomCreateButton";
import { BearerTokenAuth } from "../../configs/BearerTokenAuth";
import { Endpoints } from "../../configs/Endpoints";
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
    const response = await fetch(Endpoints.POSTS, BearerTokenAuth);
    return await response.json();
  }

  componentDidMount() {
    this.fetchResponseJSON().then((data) => {
      this.setState({ posts: data.data });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="postsPage">
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
