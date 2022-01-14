import React from "react";
import PostsPage from "./components/PostsPage/PostsPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { CommentsPage } from "./components/CommentsPage/CommentsPage";
import { UsersPage } from "./components/UsersPage/UsersPage";
import styled from "styled-components";
import { appRoutes } from "./configs/appRoutes";

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
            <Route path={appRoutes.home_url} element={<HomePage />} />
            <Route path={appRoutes.posts_url} element={<PostsPage />} />
            <Route path={appRoutes.comments_url} element={<CommentsPage />} />
            <Route path={appRoutes.users_url} element={<UsersPage />} />
          </Routes>
        </div>
      </CustomFont>
    </div>
  );
}

export default App;
