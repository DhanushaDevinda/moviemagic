import React from "react";

import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: auto;
  padding: 12px 24px;
  background-color: #333;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1000;
  line-height: 1.5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const MenuIcons = styled.div`
  display: flex;
  gap: 16px;
`;
const ResponsiveHeader = () => {
  return (
    <StyledHeader>
      <img className="menu-button" src={menu} alt="C cinemas" />

      <div className="logo">
        <img src={logo} alt="C cinemas" className="logo-img" />
      </div>

      <MenuIcons>
        <img src={search} alt="C cinemas" />
        <img src={user} alt="C cinemas" />
      </MenuIcons>
    </StyledHeader>
  );
};

export default ResponsiveHeader;
