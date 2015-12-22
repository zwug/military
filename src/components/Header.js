const React = require('react');
const {Nav, NavItem, Navbar, NavDropdown, MenuItem} = require('react-bootstrap/lib');
const {LinkContainer} = require('react-router-bootstrap');
const image = require('../../static/images/logo.jpg');

const Header = React.createClass({
  render() {
    const style = {
      background: `url(${image})`,
      backgroundSize: 'cover'
    };

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
          <LinkContainer to="/"><div className="home-img header-logo" style={style} /></LinkContainer>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Наглядные схемы" id="basic-nav-dropdown">
              <LinkContainer to="/schemas/DRL"><MenuItem>ДРЛ</MenuItem></LinkContainer>
              <MenuItem divider />
            </NavDropdown>
            <NavDropdown eventKey={2} title="Электронные книги" id="ebooks-nav-dropdown">
              <LinkContainer to="ebook"><MenuItem>РСП-6М2</MenuItem></LinkContainer>
            </NavDropdown>
            <LinkContainer to="videos"><NavItem>Видематериалы</NavItem></LinkContainer>
            <LinkContainer to="outer"><NavItem>Интерактивные схемы</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Header;
