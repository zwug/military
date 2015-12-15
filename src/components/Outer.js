const React = require('react');

const Outer = React.createClass({
  render() {
    return (
      <div className="container">
        <h1><a href="#">Запустить интерактивное приложение</a></h1>
        <small>Только если текущая ОС - windows и на ней установалено приложение.</small>
      </div>
    );
  }
});

module.exports = Outer;
