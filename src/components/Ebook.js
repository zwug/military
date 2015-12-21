const React = require('react');

const Ebook = React.createClass({
  render() {
    return (
      <iframe className="ebook" width="100%" height="100%" frameBorder="0" src="/public/books/rsp/index.html"/>
    );
  }
});

module.exports = Ebook;
