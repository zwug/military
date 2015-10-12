const React = require('react');

const Modal = React.createClass({
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">БР-009</h4>
            </div>
            <div className="modal-body modal-block-info">
              <div className="row height-all">
                <div className="col-xs-7 height-all">
                  <div className="modal-block-img" />
                </div>
                <div className="col-xs-5 block-content height-all">
                  <p>Блок БР-009 представляет собой двухканальный супергетеродинный при­ем­ник. Функциональная схема блока БР-009 изображена на рисунке 4.19.</p>
                  <p>В состав схемы блока БР-009 входят следующие субблоки:</p>
                  <p>а) усилители высокой частоты (УВЧ) суммарного и разностного кана­лов;</p>
                  <p>б) усилители промежуточной частоты (УПЧ) суммарного и разност­ного ка­налов;</p>
                  <p>в) кварцованный гетеродин с автоматической регулировкой мощности (АРМ);</p>
                  <p>г) фазовый детектор (ФД);</p>
                  <p>е) контрольно-измерительная схема.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Modal;
