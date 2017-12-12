import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import routeConfig from './router.js';
// import {
//     Link
//   } from 'react-router-dom';
import '@assets/styles/cpts/app.css';
import { 
    // Layout,
    // Menu,
    // Icon,
 } from 'antd';
 import FloatMenu from '@cpts/Basic/floatMenu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapsed: false,
    };
    this.onCollapse = this.onCollapse.bind(this);
  }
  onCollapse (collapsed) {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    // console.log(match);
    return (
      <div className="app-container">
        <Switch>
          {
            routeConfig.map((route, i) => (
                <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
            ))
          }
          <Redirect to="/app/music" from="/app" />
        </Switch>
        <div className="app-float-menu"><FloatMenu /></div>
      </div>
    );
  }
}

export default App;
