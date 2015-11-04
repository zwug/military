const React = require('react');
const {connect} = require('react-redux');
const {PopupToggle} = require('../actions');
const Header = require('components/Header');

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

function select(state) {
  return {
    showPopup: state.showPopup
  };
}

module.exports = connect(select)(App);
