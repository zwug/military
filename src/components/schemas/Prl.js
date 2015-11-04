const React = require('react');
const ModalInfo = require('components/schemas/ModalInfo');

const Prl = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="schema-block br009" data-toggle="modal" data-target="#myModalInfo"/>
        <ModalInfo show />
      </div>
    );
  }
});

module.exports = Prl;
