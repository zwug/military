const React = require('react');
const image = require('../../static/images/logo.jpg');

const Home = React.createClass({
  render() {
    const style = {
      background: `url(${image})`,
      backgroundSize: 'cover'
    };

    return (
      <div className="container">
        <div className="home">
          <p>Московский технологический университет</p>
          <h1>Военная кафедра</h1>
          <h3>Электронный учебник по дисциплине ВСП-11</h3>
          <h3>Радиолокационная система посадки РСП6-М2</h3>
          <div className="home-img" style={style} />
          <div className="row">
            <div className="pull-right credentials">
              <i>
                <p>Учебный коллектив:</p>
                <p>Руководитель: Каргапольцев А. А.</p>
                <p>Исполнители: Миронов К. Малахов А.</p>
              </i>
            </div>
          </div>
          <p>Москва 2015</p>
        </div>
      </div>
    );
  }
});

module.exports = Home;
