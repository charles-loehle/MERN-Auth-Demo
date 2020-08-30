import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink, useHistory } from 'react-router-dom';
import { signout } from '../auth/helpers';
import AuthContext from '../context/authContext';

const NavbarComponent = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, setSignout } = authContext;

  let history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-4" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/signin">
                Signin
              </NavLink>
            </NavItem>
            {isAuthenticated && (
              <NavItem>
                <NavLink
                  onClick={() => {
                    setSignout();
                    signout(() => {
                      history.push('/');
                    });
                  }}
                  tag={RRNavLink}
                  to="#!"
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
