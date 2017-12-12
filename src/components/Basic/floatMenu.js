import React, { Component } from 'react';
import "@assets/styles/cpts/basic/floatMenu.css";
import {
    Link
} from 'react-router-dom';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          opened: false,
      };
    }

    toggleList () {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        return (
            <div className={`float-btn-group ${this.state.opened ? 'open' : ''}`}>
                <div className="btn-float btn-triger" onClick={(e) => this.toggleList(e)}><i className="btn-icon"></i></div>
                <div className="btn-list">
                    <Link to="/app/music" className="btn-float blue"><i className="icon-music"></i></Link>
                    <Link to="/app/link" className="btn-float yellow"><i className="icon-link"></i></Link>
                    <Link to="/" className="btn-float green"><i className="icon-dibushouye"></i></Link>
                    {/* <Link to="/" className="btn-float purple">icon</Link> */}
                </div>
            </div>
        );
    }
}

export default App;