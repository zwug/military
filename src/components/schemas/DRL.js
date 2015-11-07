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
      text: blocksData[e.target.id],
      title: e.target.title
    });
  },
  renderBlock(title, id, className = 'schema-block') {
    return (
      <img
        className={className}
        id={id}
        title={title}
        alt={title}
        src={blocksImages[id].base}
        onClick={this.onBlockClick}
      />
    );
  },
  render() {
    return (
      <div className="container">
        <div className="drl-left-side">
          {this.renderBlock('БР-009', 'br009')}
          {this.renderBlock('БП-135', 'bp135')}
          {this.renderBlock('БЧВ-021', 'bchv021')}
          {this.renderBlock('БП-142', 'bp142')}
          {this.renderBlock('БПР-011', 'bpr011sm2')}
          {/* next row */}
          {this.renderBlock('БП-213', 'bp213')}
          {this.renderBlock('БРН-02', 'brn02')}
          {this.renderBlock('БПР-011', 'bpr011sm2')}
          {this.renderBlock('БП-138', 'bp138')}
          {this.renderBlock('БПЧС', 'bpchs')}
          {/* next row */}
          {this.renderBlock('БР-009', 'br009')}
          {this.renderBlock('БОСТ-011', 'bost011')}
          {this.renderBlock('БУ-011', 'bu011')}
          {this.renderBlock('БП-127', 'bp127')}
          {this.renderBlock('БПР-011', 'bpr011sm2')}
          {/* next row */}
          {this.renderBlock('БП-213', 'bp213')}
          {this.renderBlock('БОСТ-011', 'bost011')}
          {this.renderBlock('БКИ-011', 'bki011')}
          {this.renderBlock('БКСГ', 'bksg')}
          {this.renderBlock('БПЧС', 'bpchs')}
        </div>
        <div className="pull-left">
          {this.renderBlock('СП-02', 'adrl', 'schema-block big')}
        </div>
        <div className="drl-right-side">
          {this.renderBlock('ПВК', 'pvk', 'schema-block wide')}
          {/* next row */}
          {this.renderBlock('БУВ-2', 'buv2')}
          {this.renderBlock('БУВ-2', 'buv2')}
          {/* next row */}
          {this.renderBlock('БПМ-021', 'bpm021')}
          {this.renderBlock('БПМ-021', 'bpm021')}
          {/* next row */}
          {this.renderBlock('БВМ-011', 'bvm011')}
          {this.renderBlock('БВМ-011', 'bvm011')}
        </div>
        <div className="pull-left">
          {this.renderBlock('СП-02', 'adrl', 'schema-block big')}
        </div>
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
