const React = require('react');
const {connect} = require('react-redux');
const ModalInfo = require('components/schemas/ModalInfo');
const {popupToggle, popupUpdate} = require('../../actions');
const blocksData = require('./blocks-data/text');
const blocksImages = require('./blocks-data/images');

const PRL = React.createClass({
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
        <div className="prl-left-side">
          {this.renderBlock('БП-127', 'bp127')}
          {this.renderBlock('БЧВ-021', 'bchv021')}
          {/* next row */}
          {this.renderBlock('БОП', 'bop')}
          {this.renderBlock('БЧК-011', 'bchk011')}
          {/* next row */}
          {this.renderBlock('БСФ', 'bsf')}
          {this.renderBlock('БУ-011', 'bu011')}
          {/* next row */}
          {this.renderBlock('БКСГ', 'bksg')}
          {this.renderBlock('БКИ-011', 'bki011')}
        </div>
        <div className="pull-left">
          {this.renderBlock('СП-02', 'adrl', 'schema-block big')}
        </div>
        <div className="prl-center-side">
          {this.renderBlock('БПРН-021', 'bprn021')}
          {/* next row */}
          {this.renderBlock('БУВ', 'buv')}
          {/* next row */}
          {this.renderBlock('БПМ-021', 'bpm021')}
          {/* next row */}
          {this.renderBlock('БВМ-011', 'bvm011')}
        </div>
        <div className="pull-left">
          {this.renderBlock('СП-02', 'adrl', 'schema-block big')}
        </div>
        <div className="prl-right-side">
          {this.renderBlock('БП-135', 'bp135')}
          {this.renderBlock('УВЧ', 'uvch')}
          {this.renderBlock('УВЧ', 'uvch')}
          {this.renderBlock('НАДДУВ', 'nadduv')}
          {/* next row */}
          {this.renderBlock('БУВ', 'buv')}
          {this.renderBlock('БПР-02', 'bpr02')}
          {this.renderBlock('БПР-02', 'bpr02')}
          {this.renderBlock('БГ-02', 'bg02')}
          {/* next row */}
          {this.renderBlock('БПМ-021', 'bpm021')}
          {this.renderBlock('БП АПЧ', 'bp_apch')}
          {this.renderBlock('БП АПЧ', 'bp_apch')}
          {this.renderBlock('БГ-02', 'bg02')}
          {/* next row */}
          {this.renderBlock('БВМ-011', 'bvm011')}
          {this.renderBlock('БФ', 'bf')}
          {this.renderBlock('БФ', 'bf')}
          {this.renderBlock('БРН-02', 'brn02')}
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
})(PRL);
