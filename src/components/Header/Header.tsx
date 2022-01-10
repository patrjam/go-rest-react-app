import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/home.svg";
import styled from "styled-components";

const StyledMenu = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .option {
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  .logo-container {
    height: 100%;
    width: 40px;
    padding: 25px;
  }

  &.hover  {
    cursor: pointer;
  }
`;

const Header = () => (
  <div className="header">
    <StyledMenu>
      <div className="logo-container">
        <Link className="logo-link" to="/">
          <Logo className="logo" />
        </Link>
      </div>

      <div className="options">
        <Link className="option" to="/posts">
          POSTS
        </Link>
        <Link className="option" to="/comments">
          COMMENTS
        </Link>
        <Link className="option" to="/users">
          USERS
        </Link>
      </div>
    </StyledMenu>
  </div>
);

export default Header;
