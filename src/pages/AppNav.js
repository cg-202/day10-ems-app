import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOutAction } from "../redux/store";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">EMS APP</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/employee-list">
            EMP-LIST
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-upsert">
            EMP-UPSERT
          </Nav.Link>
          <Nav.Link onClick={signOut}>SIGN OUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
