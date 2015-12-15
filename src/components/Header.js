const React = require('react');
const {Nav, Navbar, NavItem, NavDropdown, MenuItem} = require('react-bootstrap/lib');
const {LinkContainer} = require('react-router-bootstrap');

const Header = React.createClass({
  render() {
    return (
      <Navbar>
        <Nav>
          <NavDropdown eventKey={2} title="Наглядные схемы" id="basic-nav-dropdown">
            <LinkContainer to="/schemas/DRL"><MenuItem>ДРЛ</MenuItem></LinkContainer>
            <MenuItem divider />
          </NavDropdown>
          <NavItem href="/military/public/books/rsp/index.html">Электронная книга</NavItem>
          <LinkContainer to="videos"><MenuItem>Видематериалы</MenuItem></LinkContainer>
          <LinkContainer to="outer"><MenuItem>Интерактивные схемы</MenuItem></LinkContainer>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Header;
