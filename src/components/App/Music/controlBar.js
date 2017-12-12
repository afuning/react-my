import React, { Component } from 'react';
class ControlBar extends Component{
    render () {
        return (
            <div className="control-container">
                <PlayToggle></PlayToggle>
            </div>
        );
    }
}
const PlayToggle = () => (
    <div className="play-container">
        <div className="last control-btn"><i className="icon-last"></i></div>
        <div className="play control-btn"><i className="icon-play"></i></div>
        <div className="next control-btn"><i className="icon-next"></i></div>
        <ProgressBar></ProgressBar>
        <div className="next control-btn"><i className="icon-8"></i></div>
        <SoundBar></SoundBar>
    </div>
)
const ProgressBar = () => (
    <div className="progress-bar">
        <div className="progress-bar__filled">
            <div className="progress-bar__dragger"/>
        </div>
    </div>
)

const SoundBar = () => (
    <div className="progress-bar__sound">
        <div className="next control-btn"><i className="icon-11"></i></div>
        <ProgressBar></ProgressBar>
    </div>
)

export default ControlBar;