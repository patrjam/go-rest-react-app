import React from "react";
import { PostsPage } from "./components/PostsPage/PostsPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { CommentsPage } from "./components/CommentsPage/CommentsPage";
import { UsersPage } from "./components/UsersPage/UsersPage";
import styled from "styled-components";
import { appRoutesList } from "./configs/appRoutesList";
import { NewPost } from "./components/NewPost/NewPost";
import NetworkDetector from "./components/NetworkDetector/NetworkDetector";

const CustomFont = styled.div`
  font-family: "Poppins";
  padding: 20px 200px;
  box-sizing: border-box;
`;

function App() {
  return (
    <div>
      <CustomFont>
        <Header />
        <div>
          <Routes>
            <Route path={appRoutesList.home_url} element={<HomePage />} />
            <Route path={appRoutesList.posts_url} element={<PostsPage />} />
            <Route path={appRoutesList.comments_url} element={<CommentsPage />} />
            <Route path={appRoutesList.users_url} element={<UsersPage />} />
            <Route path={appRoutesList.newPost_url} element={<NewPost />} />
          </Routes>
        </div>
      </CustomFont>
    </div>
  );
}

export default NetworkDetector(App);
