import React from 'react';
import { PostsPage } from './components/PostsPage/PostsPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { CommentsPage } from './components/CommentsPage/CommentsPage';
import { UsersPage } from './components/UsersPage/UsersPage';
import styled from 'styled-components';
import { appRoutesList } from './configs/appRoutesList';
import { NewPost } from './components/NewPost/NewPost';
import { ThemeProvider } from 'styled-components';
import { CustomColors } from './colors/Colors';

const CustomFont = styled.div`
  font-family: 'Poppins';
  padding: 20px 200px;
  box-sizing: border-box;
`;

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={CustomColors}>
        <CustomFont>
          <Header />
          <div>
            <Routes>
              <Route path={appRoutesList.homeUrl} element={<HomePage />} />
              <Route path={appRoutesList.postsUrl} element={<PostsPage />} />
              <Route
                path={appRoutesList.commentsUrl}
                element={<CommentsPage />}
              />
              <Route path={appRoutesList.usersUrl} element={<UsersPage />} />
              <Route path={appRoutesList.newPostUrl} element={<NewPost />} />
            </Routes>
          </div>
        </CustomFont>
      </ThemeProvider>
    </div>
  );
};
