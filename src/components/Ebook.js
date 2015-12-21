const React = require('react');

const Ebook = React.createClass({
  render() {
    // /public/books/rsp/index.html
    const ebookPath = 'https://zwug.gitbooks.io/rsp6m2/content/';
    return (
      <iframe className="ebook" width="100%" height="100%" frameBorder="0" src={ebookPath}/>
    );
  }
});

module.exports = Ebook;
