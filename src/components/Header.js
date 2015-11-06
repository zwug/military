const React = require('react');
const {Nav, Navbar, NavBrand, NavDropdown, MenuItem} = require('react-bootstrap/lib');
const {LinkContainer} = require('react-router-bootstrap');

const Header = React.createClass({
  render() {
    return (
      <Navbar>
        <NavBrand><a href="#">Учебное пособие</a></NavBrand>
        <Nav>
          <NavDropdown eventKey={2} title="Интерактивные схемы" id="basic-nav-dropdown">
            <LinkContainer to="/schemas/DRL"><MenuItem>ДРЛ</MenuItem></LinkContainer>
            <MenuItem divider />
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Header;
