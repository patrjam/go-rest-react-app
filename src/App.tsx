import React from "react";
import PostsPage from "./components/PostsPage/PostsPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import CommentsPage from "./components/CommentsPage/CommentsPage";
import UsersPage from "./components/UsersPage/UsersPage";
import styled from "styled-components";

const CustomFont = styled.div`
  font-family: "Poppins";
  padding: 20px 130px;
  box-sizing: border-box;
`;

function App() {
  return (
    <div className="App">
      <CustomFont>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>
      </CustomFont>
    </div>
  );
}

export default App;
