const React = require('react');
require("imports?PDF=pdfjs-dist!./Part.js");
var PDF = require('react-pdf');

const Part = React.createClass({
  getInitialState() {
    return {
      currentPage: 1
    };
  },
  propTypes: {
    src: React.PropTypes.string.isRequired,
    pages: React.PropTypes.number.isRequired
  },
  prevPage(ev) {
    ev.preventDefault();
    this.setState({
      currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
    });
  },
  nextPage(ev) {
    ev.preventDefault();
    this.setState({ currentPage: this.state.currentPage < this.props.pages ? this.state.currentPage + 1 : this.props.pages });
  },
  render() {
    return (
      <div className="container pdf-container">
        <div>
          <button onClick={this.prevPage}>Previous page</button>
          <span className="pdf-page-num">{this.state.currentPage}</span>
          <button onClick={this.nextPage}>Next page</button>
        </div>
        <PDF file={this.props.src} page={this.state.currentPage} scale={1.4} />
      </div>
    );
  }
});

module.exports = Part;
