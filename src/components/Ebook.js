const React = require('react');
const arrowSrc = require('../../static/images/back-to-top.png');

const Ebook = React.createClass({
  shouldComponentUpdate() {
    return false;
  },
  componentDidMount() {
    const timeout = 600;
    setTimeout(() => {
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
          `position: absolute;
          height: 50px;
          width: 50px;
          bottom: 50px;
          right: 30px;
          cursor: pointer;
          background: url('/${arrowSrc}');`
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
    const ebookPath = 'public/books/rsp/cover.html';
    //const ebookPath = 'https://zwug.gitbooks.io/rsp6m2/content/';
    return (
      <iframe className="ebook" width="100%" height="100%" frameBorder="0" src={ebookPath}/>
    );
  }
});

module.exports = Ebook;
