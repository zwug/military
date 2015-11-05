const React = require('react');
const Header = require('components/Header');

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
