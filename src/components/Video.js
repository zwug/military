const React = require('react');

const Video = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="col-xs-6">
        <div className="video">
          <h2>{this.props.title}</h2>
          <video src={this.props.src} controls width="100%">
            Your browser does not support the <code>video</code> element.
          </video>
        </div>
      </div>
    );
  }
});

module.exports = Video;
