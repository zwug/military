const React = require('react');
const {Link} = require('react-router');

const Header = React.createClass({
  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">РСП-6М2</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Интерактивные схемы<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/schemas/prl">ПРЛ</Link></li>
                    <li role="separator" className="divider"></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a>37 Взвод</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
