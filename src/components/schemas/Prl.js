const React = require('react');
const {connect} = require('react-redux');
const ModalInfo = require('components/schemas/ModalInfo');
const {popupToggle} = require('../../actions');

const Prl = React.createClass({
  propTypes: {
    popupToggle: React.PropTypes.func.isRequired,
    showPopup: React.PropTypes.bool.isRequired
  },
  render() {
    return (
      <div className="container">
        <div className="schema-block br009" onClick={this.props.popupToggle}/>
        <ModalInfo show={this.props.showPopup} onHide={this.props.popupToggle} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    showPopup: state.showPopup
  };
}

module.exports = connect(mapStateToProps, {
  popupToggle
})(Prl);
