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
            <NavDropdown eventKey={1} title="Расположение блоков" id="basic-nav-dropdown">
              <LinkContainer to="/schemas/DRL"><MenuItem>ДРЛ</MenuItem></LinkContainer>
              <LinkContainer to="/schemas/PRL"><MenuItem>ПРЛ</MenuItem></LinkContainer>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Электронные книги" id="ebooks-nav-dropdown">
              <LinkContainer to="/book/rsp">
                <MenuItem>
                  <strong>Радиолокационные системы посадки РСП-6М2</strong> - С.И. Волков, А.А. Каргопольцев, Н.Н. Курилов
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/book/lobachev">
                <MenuItem>
                  <strong>Радиолокационные системы управления воздушным движением</strong> - С.И. Волков, Ю.В. Лобачев, Е.С. Перевозов
                </MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="videos"><NavItem>Видеоматериалы</NavItem></LinkContainer>
            {/*<LinkContainer to="outer"><NavItem>Интерактивные схемы</NavItem></LinkContainer>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Header;
