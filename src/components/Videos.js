const React = require('react');
const video = require('../../static/videos/purpose.mp4');

const Videos = React.createClass({
  render() {
    return (
      <div className="container">
        <video src={video} controls>
          Your browser does not support the <code>video</code> element.
        </video>
      </div>
    );
  }
});

module.exports = Videos;
