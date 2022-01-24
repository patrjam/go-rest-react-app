import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/home.svg";
import styled, { ThemeProvider } from "styled-components";
import { appRoutesList } from "../../configs/appRoutesList";
import { CustomColors } from "../../colors/Colors";

const StyledMenu = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover  {
    cursor: pointer;
  }
`;

const StyledOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

const StyledLogoLink = styled(Link)`
  height: 100%;
  width: 40px;
  padding: 25px;
`;

export const Header = () => (
  <div>
    <StyledMenu>
      <div>
        <StyledLogoLink to={appRoutesList.home_url}>
          <Logo />
        </StyledLogoLink>
      </div>

      <ThemeProvider theme={CustomColors}>
        <div>
          <StyledOption to={appRoutesList.posts_url}>POSTS</StyledOption>
          <StyledOption to={appRoutesList.comments_url}>COMMENTS</StyledOption>
          <StyledOption to={appRoutesList.users_url}>USERS</StyledOption>
        </div>
      </ThemeProvider>
    </StyledMenu>
  </div>
);
