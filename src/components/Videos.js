const React = require('react');
const Video = require('components/Video');

const purpose = require('../../static/videos/purpose.mp4');
const common = require('../../static/videos/common.mp4');
const drl = require('../../static/videos/drl.mp4');
const prl = require('../../static/videos/prl.mp4');

const Videos = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <Video src={purpose} title="Назначение и состав"/>
          <Video src={common} title="Общее расположение"/>
        </div>
        <div className="row">
          <Video src={drl} title="ДРЛ ТТХ"/>
          <Video src={prl} title="ПРЛ ТТХ"/>
        </div>
      </div>
    );
  }
});

module.exports = Videos;
