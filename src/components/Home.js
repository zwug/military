const React = require('react');
const image = require('../../static/images/logo.jpg');

const Home = React.createClass({
  render() {
    const style = {
      background: `url(${image})`,
      backgroundSize: 'contain'
    };

    return (
      <div className="container">
        <h1 className="home-heading">Учебное пособие</h1>
        <div className="home-img" style={style} />
      </div>
    );
  }
});

module.exports = Home;
