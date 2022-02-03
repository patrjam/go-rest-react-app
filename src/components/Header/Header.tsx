import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/home.svg";
import styled from "styled-components";
import { appRoutesList } from "../../configs/appRoutesList";

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
        <StyledLogoLink to={appRoutesList.homeUrl}>
          <Logo />
        </StyledLogoLink>
      </div>

      <div>
        <StyledOption to={appRoutesList.postsUrl}>POSTS</StyledOption>
        <StyledOption to={appRoutesList.commentsUrl}>COMMENTS</StyledOption>
        <StyledOption to={appRoutesList.usersUrl}>USERS</StyledOption>
      </div>
    </StyledMenu>
  </div>
);
