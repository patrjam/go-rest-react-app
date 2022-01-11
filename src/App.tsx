import React from "react";
import PostsPage from "./components/PostsPage/PostsPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { CommentsPage } from "./components/CommentsPage/CommentsPage";
import { UsersPage } from "./components/UsersPage/UsersPage";
import styled from "styled-components";
import { AppRoutes } from "./configs/AppRoutes";

const CustomFont = styled.div`
  font-family: "Poppins";
  padding: 20px 200px;
  box-sizing: border-box;
`;

function App() {
  return (
    <div className="App">
      <CustomFont>
        <Header />
        <div>
          <Routes>
            <Route path={AppRoutes.home_url} element={<HomePage />} />
            <Route path={AppRoutes.posts_url} element={<PostsPage />} />
            <Route path={AppRoutes.comments_url} element={<CommentsPage />} />
            <Route path={AppRoutes.users_url} element={<UsersPage />} />
          </Routes>
        </div>
      </CustomFont>
    </div>
  );
}

export default App;
