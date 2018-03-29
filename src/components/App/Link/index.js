import React, { Component } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import {
//     Link
//   } from 'react-router-dom';
// import '@assets/styles/cpts/app.css';
import { 
  Button
 } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app-container">
       链接<Button type="primary">按钮</Button>
      </div>
    );
  }
}

export default App;
