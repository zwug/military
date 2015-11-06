const React = require('react');
const {Modal, Button} = require('react-bootstrap/lib');

const ModalInfo = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    onHide: React.PropTypes.func.isRequired
  },
  renderBlockInfo() {
    return {
      __html: this.props.text
    };
  },
  render() {
    return (
      <Modal {...this.props} bsSize="large">
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="modal-info-image" src={this.props.src}/>
          <div dangerouslySetInnerHTML={this.renderBlockInfo()} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Закрыть</Button>
        </Modal.Footer>
     </Modal>
    );
  }
});

module.exports = ModalInfo;
