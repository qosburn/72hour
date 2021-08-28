import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">72 Hour Project</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Header;
