const React = require('react');
const {Link} = require('react-router');
const {Nav, Navbar, NavBrand, NavDropdown, NavItem, MenuItem} = require('react-bootstrap/lib');

const Header = React.createClass({
  render() {
    return (
      <Navbar>
        <NavBrand><a href="#">Учебное пособие</a></NavBrand>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey="1"><Link to="/schemas/prl">ПРЛ</Link></MenuItem>
            <MenuItem divider />
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Header;
