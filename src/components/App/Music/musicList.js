import React, { Component } from 'react';
class MusicList extends Component{
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            audio: null,
        };
    }
    render () {
        return (
            <div className="music-list">
            </div>
        );
    }
}

export default MusicList;