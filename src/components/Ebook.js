const React = require('react');
const arrowSrc = require('../../static/images/back-to-top.png');

const Ebook = React.createClass({
  componentDidMount() {
    this.createArrow()
  },
  componentWillUpdate() {
    this.createArrow();
  },
  createArrow() {
    const timeout = 600;
    setTimeout(() => {
      document.domain = 'localhost';
      let iframe = document.querySelector('iframe').contentDocument;
      this.onClick();
      iframe.addEventListener('click', () => {
        setTimeout(() => {
          this.onClick();
        }, timeout);
      });
    }, timeout);
  },
  onClick() {
      let iframe = document.querySelector('iframe').contentDocument;
      iframe.domain = 'localhost';
      let wrapper = iframe.querySelector('.body-inner');
      let scrollable = iframe.querySelector('.book-body');

      if (iframe.querySelector('.page-wrapper').clientHeight > 800) {
        scrollable.setAttribute('style',
          `overflow: overlay;`
        );
        wrapper.style.position = 'relative';
        let arrowContainer = iframe.createElement('div');
        arrowContainer.setAttribute('class', 'arrow-top');
        arrowContainer.setAttribute('style',
          `position: fixed;
          height: 50px;
          width: 50px;
          bottom: 5px;
          right: 30px;
          cursor: pointer;
          background: url('${arrowSrc}');
          background-size: contain;
          z-index: 100`
        );

        function scrollTo(element, to, duration) {
          if (duration < 0) return;
          var difference = to - element.scrollTop;
          var perTick = difference / duration * 2;

          setTimeout(function() {
              element.scrollTop = element.scrollTop + perTick;
              scrollTo(element, to, duration - 2);
          }, 10);
        }

        wrapper.appendChild(arrowContainer);
        arrowContainer.addEventListener('click', () => {
          scrollTo(scrollable, 0, 100);
        });
      }
  },
  render() {
    const ebookPath = `books/${this.props.routeParams.book}/index.html`;

    return (
      <iframe className="ebook" width="100%" height="100%" frameBorder="0" src={ebookPath}/>
    );
  }
});

module.exports = Ebook;
