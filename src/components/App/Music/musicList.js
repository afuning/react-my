import React, { Component } from 'react';
import { mSecondToMinute } from '@src/util/tools.js';
class MusicList extends Component{

    changeSong (song) {
        this.props.onChange(song);
    }

    render () {
        const { list, currentIndex } = this.props;
        return (
            <div className="music-list">
                <ul>
                    {
                        list.map((item, i) => {
                            return (<li className="song-item" onClick={this.changeSong.bind(this, item)} key={item.id}>
                                <span className="song-item-index">{i + 1}</span>
                                <span className="song-item-name">{item.name}</span>
                                <span className="song-item-time">{mSecondToMinute(item.duration)}</span>
                                <span className="song-item-icon">
                                    <i className={currentIndex === i ? 'icon-music1' : 'icon-play'}></i>
                                </span>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MusicList;