const React = require('react');
const {Modal, Button} = require('react-bootstrap/lib');

const ModalInfo = React.createClass({
  render() {
    return (
      <div className="static-modal">
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-info-image" src={require('../../../static/images/br009.png')}/>
            <p>Блок БР-009 представляет собой двухканальный супергетеродинный при­ем­ник. Функциональная схема блока БР-009 изображена на рисунке 4.19.</p>
            <p>В состав схемы блока БР-009 входят следующие субблоки:</p>
            <p>а) усилители высокой частоты (УВЧ) суммарного и разностного кана­лов;</p>
            <p>б) усилители промежуточной частоты (УПЧ) суммарного и разност­ного ка­налов;</p>
            <p>в) кварцованный гетеродин с автоматической регулировкой мощности (АРМ);</p>
            <p>г) фазовый детектор (ФД);</p>
            <p>е) контрольно-измерительная схема.</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
       </Modal>
     </div>
    );
  }
});

module.exports = ModalInfo;
