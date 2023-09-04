import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
export const CustomNavbar = () => {
  const isLogin = localStorage.getItem('isLogin')
  const username = localStorage.getItem('username')
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.clear()
    navigate("/login") 
    window.location.reload()
  }
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="fixed">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to={'/'}>Eminence Test Project</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {
            isLogin ?   <Nav
            className="text-right my-4 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Welcome {username}</Nav.Link>
            <Nav.Link href="#" onClick={logout}>
                  Logout
            </Nav.Link>
          </Nav> :   <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">
              <Link to={"/signup"}>Register</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={'/login'}>Login</Link>
            </Nav.Link>
          </Nav>
          }
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
