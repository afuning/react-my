import React, { Component } from 'react';
import '@assets/styles/cpts/music.css';
import ControlBar from './controlBar.js';
// import LoadScreen from '@cpts/Basic/loadScreen.js';
// import Particles from '@cpts/Basic/particles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: {},
      list: [{
        src: 'http://7xthm1.com1.z0.glb.clouddn.com/wedont.mp3',
      }],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="music-container">
        {/* <LoadScreen></LoadScreen> */}
        <div className="music-wrap">

          {/* <Particles 
            isPlaying={true} 
            loading={false}
            isDraggingTime={false}
          /> */}
          <ControlBar audio={list[0].src}></ControlBar>
        </div>
      </div>
    );
  }
}

export default App;
