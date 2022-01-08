import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Jumbotron,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    alert(`Username: ${this.username.value} Password: ${this.password.value} 
        Remember: ${this.rememeber.checked} `);
    this.toggleModal();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Tipsimply.</h1>
                <h3>Make tracking tips simple.</h3>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar id="navBar" dark color="dark" expand="md">
          <div className="container">
            <NavbarBrand href="/">Tipsimply.</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="nav-link" to="/">
                  <NavLink className="nav-link" to="/home">
                  <i class="fa fa-home fa-lg"> Home</i>
                </NavLink>
                </NavItem>
                <NavItem className="nav-link" to="/">
                  <NavLink className="nav-link" to="/home">
                  <i class="fa fa-file"> About</i>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-link" to="/">
                  <NavLink className="nav-link" to="/home">
                      <i class="fa fa-paper-plane"> Contact</i>
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" />
                  Log In
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="dark">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
