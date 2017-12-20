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
            <div className="music-bar" onClick={this.props.onClick.bind(this)}>
                <div>Music List</div>
                <div className="music-bar-list">
                    {
                        new Array(9).fill(1).map((i, index) => {
                            return <div key={index} className={`bar b${index}`}></div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MusicList;