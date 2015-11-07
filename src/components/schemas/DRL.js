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
        <div className="drl-left-side">
          <img className="schema-block" alt="БР-009" id="br009" src={blocksImages.br009.base} onClick={this.onBlockClick}/>
          <img className="schema-block" alt="БП-135" id="bp135" src={blocksImages.bp135.base} onClick={this.onBlockClick}/>
          <img className="schema-block" alt="БЧВ-021" id="bchv021" src={blocksImages.bchv021.base} onClick={this.onBlockClick}/>
          <img className="schema-block" alt="БП-142" id="bp142" src={blocksImages.bp142.base} onClick={this.onBlockClick}/>
          <img className="schema-block" alt="БПР-011" id="bpr011sm2" src={blocksImages.bpr011sm2.base} onClick={this.onBlockClick}/>
        </div>
        <img className="schema-block big" alt="СП-02" id="adrl" src={blocksImages.adrl.base} onClick={this.onBlockClick}/>


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
