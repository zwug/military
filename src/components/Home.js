const React = require('react');
const image = require('../../static/images/airport.svg');

const Home = React.createClass({
  render() {
    const style = {
      background: `url(${image})`,
      backgroundSize: 'contain'
    };

    return (
      <div className="container">
        <div className="home-img" style={style} />
      </div>
    );
  }
});

module.exports = Home;
