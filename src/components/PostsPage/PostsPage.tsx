import React from "react";
import PostItem from "../PostItem/PostItem";
import CustomCreateButton from "../CustomButtons/CustomCreateButton/CustomCreateButton";
import BearerTokenAuth from "../../configs/BearerTokenAuth";
import Endpoints from "../../configs/Endpoints";


type PostsPageProps = {
    id: number,
    title: string
}
class PostsPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(Endpoints.POSTS, BearerTokenAuth)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data.data });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="postsPage">
        <h1>POSTS PAGE</h1>
        <CustomCreateButton>Create post</CustomCreateButton>
        <br />
        <br />
        <table>
          <tbody>
            {posts.map(({ id, title }: PostsPageProps) => (
              <PostItem key={id} id={id} title={title} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostsPage;
