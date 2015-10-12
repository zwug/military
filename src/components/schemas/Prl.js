const React = require('react');
const Modal = require('components/schemas/Modal');

const Prl = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="schema-block br009" data-toggle="modal" data-target="#myModal"/>
        <Modal/>
      </div>
    );
  }
});

module.exports = Prl;
