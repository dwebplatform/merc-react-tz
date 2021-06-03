import React from 'react'
import { BrandIcon } from "./ui/BrandIcon";
import { Menu, MenuItem } from "./ui/Menu";

export const Header = () => {
  return (
    <nav className="header m-header">
      <a href="!#" className="header__brand">
        <BrandIcon style={{ fill: "#fff" }} />
      </a>
      <Menu>
        <MenuItem>List 1</MenuItem>
        <MenuItem>List 2</MenuItem>
        <MenuItem>List 3</MenuItem>
        <MenuItem>List 4</MenuItem>
      </Menu>
    </nav>
  );
};
