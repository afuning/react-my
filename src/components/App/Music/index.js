import React from 'react';
import '@assets/styles/cpts/music.css';
import MusicList from './musicList.js';
import MusicBar from './musicBar.js';
import ControlBar from './controlBar.js';
import apis from '@src/util/api/index.js';
// import LoadScreen from '@cpts/Basic/loadScreen.js';
// import Particles from '@cpts/Basic/particles.js';
import findIndex from 'lodash/findIndex';
import { _SONG_URL_ } from '@src/util/static.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: {},
      list: [],
      listStatus: false,
      currentIndex: 0,
    };
  }

  componentDidMount () {
    this.initMusic();
  }

  changeMusic (type, song = null) {
    let { audio, list } = this.state;
    const currentId = this.state.audio.id;
    const index = findIndex(list, { id: currentId });
    if (index === -1) return;
    switch (type) {
      case 'prev':
        if (index === 0) {
          audio = list[list.length - 1];
        } else {
          audio = list[index - 1];
        }
        break;
      case 'next':
        if (index === list.length - 1) {
          audio = list[0];
        } else {
          audio = list[index + 1];
        }
        break;
      case 'select':
        audio = {...song};
        break;
      default:
        break;
    }
    this.setState({
      audio,
      currentIndex: findIndex(list, { id: audio.id })
    });
  }

  async initMusic () {
    try {
      const res = await apis.music.search({
        keywords: '空空如也'
      });
      if (res.code === 200 && res.result.songCount > 0) {
        let list = res.result.songs.map(song => {
          return {
            ...song,
            src: `${_SONG_URL_}${song.id}.mp3`
          }
        });
        this.setState({
          list: list,
          audio: list[0],
          currentIndex: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  openList () {
    this.setState({
      listStatus: !this.state.listStatus
    });
  }

  render() {
    const { audio, listStatus, list, currentIndex } = this.state;
    return (
      <div className="music-content">
        <div className={listStatus ? 'music-leftnav' : 'music-leftnav music-leftnav__close'}>
          <MusicList
            list={list}
            currentIndex={currentIndex}
            onChange={this.changeMusic.bind(this, 'select')}
          />
          <MusicBar onClick={this.openList.bind(this)} />
        </div>
        <div className="music-container">
          {/* <LoadScreen></LoadScreen> */}
          <div className="music-wrap">

            {/* <Particles 
              isPlaying={true} 
              loading={false}
              isDraggingTime={false}
            /> */}
            <ControlBar 
              audio={audio}
              onPrev={this.changeMusic.bind(this, 'prev')}
              onNext={this.changeMusic.bind(this, 'next')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
