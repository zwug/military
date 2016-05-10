const React = require('react');
const Part = require('components/parts/Part');

var parts = [{
  },{
    src: require('../../static/docs/part1.pdf'),
    pages: 298
  },
  {
    src: require('../../static/docs/part2.pdf'),
    pages: 223
  },{
    src: require('../../static/docs/part3.pdf'),
    pages: 128
  },{
    src: require('../../static/docs/part4.pdf'),
    pages: 116
}];

const Parts = React.createClass({
  render() {
    const part = parts[this.props.routeParams.partId];

    return (
      <Part {...part}/>
    );
  }
});

module.exports = Parts;
