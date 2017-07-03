import React from 'react';

require('../static/playground.less');


export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowOpen: true
    };

    this.amapEvents = {
      click: (e) => { this.loadRestaurant(e); }
    };
  }

  loadRestaurant(e) {
    const lnglat = e.lnglat;
    const longitude = lnglat.getLng();
    const latitude = lnglat.getLat();

  }

  renderMyLogo() {
    return <div className="react-amap-icon">
      <a href="#">
        <i></i>
        <p>react-amap</p>
      </a>
    </div>;
  }

  renderInfoWindow() {
    return <div id="playground">
    </div>;
  }

  render() {
    return <div id="playground">
    </div>;
  }
}
