import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import '@assets/styles/cpts/main.css';
import avator from '@assets/images/avator.jpg';

import { formatEmoji } from '@src/util/tools.js';
import { Tooltip } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'afncn@icloud.com'
    };
  }

  render() {
    return (
      <div className="house-container">
        <div className="land-lady">
            <div className="avator"><Link to="/one"><img className="width-100" src={avator} alt="avator" /></Link></div>
            <div className="content">
              <h1>EAT!&nbsp;&nbsp;&nbsp;SLEEP!&nbsp;&nbsp;&nbsp;CODE!&nbsp;&nbsp;<span role="img" aria-label="emoji" dangerouslySetInnerHTML={formatEmoji("U+1F436")}></span></h1>
              <div className="links">
                <Link to="/"><i className="icon-home"></i></Link>
                <a href="https://github.com/hajiwon1023" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                <Tooltip placement="bottom" title={this.state.email}>
                  <Link to="/"><i className="icon-email"></i></Link>
                </Tooltip>
                <Link to="/app"><i className="icon-app"></i></Link>
              </div>
              <div className="name">BY Zoe</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
