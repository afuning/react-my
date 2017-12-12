import React, { Component } from 'react';
import "@assets/styles/cpts/basic/loadScreen.css";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
        return (
            <div className="loading-screen">
                <div>
                    <div className="c1"></div>
                    <div className="c2"></div>
                    <div className="c3"></div>
                    <div className="c4"></div>
                </div>
                <span>加载中</span>
            </div>
        );
    }
}

export default App;