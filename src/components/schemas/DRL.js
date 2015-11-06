const React = require('react');
const {connect} = require('react-redux');
const ModalInfo = require('components/schemas/ModalInfo');
const {popupToggle, popupUpdate} = require('../../actions');
const blocksData = require('./blocks-data/text');
const blocksImages = require('./blocks-data/images');

const DRL = React.createClass({
  propTypes: {
    popupToggle: React.PropTypes.func.isRequired,
    popupUpdate: React.PropTypes.func.isRequired,
    showPopup: React.PropTypes.bool.isRequired,
    popupContent: React.PropTypes.shape({
      src: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired
    }).isRequired
  },
  onBlockClick(e) {
    this.props.popupToggle();
    this.props.popupUpdate({
      src: blocksImages[e.target.id].refactored,
      text: blocksData[e.target.id].text,
      title: blocksData[e.target.id].title
    });
  },
  render() {
    return (
      <div className="container">
        <img className="schema-block" id="br009" src={blocksImages.br009.base} onClick={this.onBlockClick}/>
        <img className="schema-block" id="bp135" src={blocksImages.bp135.base} onClick={this.onBlockClick}/>
        <ModalInfo {...this.props.popupContent} show={this.props.showPopup} onHide={this.props.popupToggle} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    showPopup: state.showPopup,
    popupContent: state.popupContent
  };
}

module.exports = connect(mapStateToProps, {
  popupToggle,
  popupUpdate
})(DRL);
