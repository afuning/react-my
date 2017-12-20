import React, { Component } from 'react';
import { secondToMinute } from '@src/util/tools.js';
class ControlBar extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            audio: null,
        };
        this.controlAction = this.controlAction.bind(this);
    }
    componentDidMount () {
        this.currentAudio = new Audio();
        this.currentAudio.addEventListener('loadeddata', () => {this.controlAction('play&pause')}, false);
        this.currentAudio.addEventListener('timeupdate', this.controlAction, false);
        this.currentAudio.addEventListener('ended', () => {this.controlAction('next')}, false);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.audio.src !== nextProps.audio.src;
    // }
    componentWillUpdate(nextProps){
        if (!this.state.audio || nextProps.audio.src !== this.state.audio.src) {
            this.initAudio(nextProps);
        }
    }
    componentWillUnmount(){
        this.state.audio.removeEventListener('timeupdate', this.controlAction);
        this.state.audio.pause();
    }
    initAudio (nextProps) {
        try {
            if (nextProps.audio.src) {
                this.currentAudio.src = nextProps.audio.src;
                this.setState({ audio: this.currentAudio }, () => {
                    this.state.audio.load();
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    controlAction (type = '', value = '') {
        if (this.state.audio) {
            const audio = this.state.audio;
            switch (type) {
                case 'play&pause':
                    audio.paused ? audio.play() : audio.pause();
                    break;
                case 'replay':
                    audio.currentTime = 0;
                    break;
                case 'progress':
                    audio.currentTime = audio.duration * value;
                    break;
                case 'volume':
                    audio.volume = value;
                    break;
                case 'last':
                    this.props.onPrev();
                    return;
                case 'next':
                    this.props.onNext();
                    return;
                default:
                    break;
            }
            this.setState({ audio });
        }
    }

    render () {
        return (
            <div className="control-container">
                <PlayToggle
                    audio={this.state.audio}
                    onClick={this.controlAction.bind(this)}
                ></PlayToggle>
            </div>
        );
    }
}
class PlayToggle extends Component{
    render () {
        const { audio } = this.props;
        const currentTime = audio ? audio.currentTime : 0;
        const duration = audio ? isNaN(audio.duration) ? 0 : audio.duration : 0;
        const progress = audio ? currentTime / duration * 100 : 0;
        const paused = audio ? audio.paused : true;
        const volume = audio ? audio.volume * 100: 100;
        return (
            <div className="play-container">
                <div onClick={this.props.onClick.bind(this, 'last')} className="last control-btn"><i className="icon-last"></i></div>
                <div onClick={this.props.onClick.bind(this, 'play&pause')} className="play control-btn"><i className={paused ? "icon-play" : "icon-pause"}></i></div>
                <div onClick={this.props.onClick.bind(this, 'next')} className="next control-btn"><i className="icon-next"></i></div>
                <div className="progress-bar__time">
                    <ProgressBar 
                        progress={progress}
                        onChange={this.props.onClick.bind(this)}
                        type="progress"
                    />
                    <div style={{paddingLeft: '20px'}}>{secondToMinute(currentTime)} / {secondToMinute(duration)}</div>
                </div>
                <div onClick={this.props.onClick.bind(this, 'replay')} className="next control-btn"><i className="icon-8"></i></div>
                <SoundBar
                    onChange={this.props.onClick.bind(this)}
                    volume={volume}
                ></SoundBar>
            </div>
        )
    }
}
class ProgressBar extends Component {
    constructor (props) {
        super(props);
        this.changeProgress = this.changeProgress.bind(this)
    }
    changeProgress (e) {
        let obj = e.currentTarget;
        let start = 0;
        while(obj) {
            start =start + obj.offsetLeft + obj.clientLeft;
            obj = obj.offsetParent;
        }
        const end = start + e.currentTarget.offsetWidth;
        const put = e.clientX;
        let progress = (put - start) / (end - start);
        // 防止超出1；
        if (progress > 1) {
            progress = 1;
        }
        this.props.onChange(this.props.type, progress);
    }
    render () {
        return (
            <div className="progress-bar" onClick={this.changeProgress}>
                <div className="progress-bar__filled">
                    <div className="progress-bar__dragger" style={{"left": `${this.props.progress}%`}}/>
                </div>
            </div>
        )
    }
}

class SoundBar extends Component {
    clickSound () {
        console.log(this.props.volume);
        if (this.props.volume !== 0) {
            this.props.onChange('volume', 0);
        } else {
            this.props.onChange('volume', 1);
        }
    }
    render () {
        return (
            <div className="progress-bar__sound">
                <div onClick={this.clickSound.bind(this)} className="next control-btn padding-right-6">
                    <i className={this.props.volume !== 0 ? 'icon-11' : 'icon-mute'}></i>
                </div>
                <ProgressBar
                    progress={this.props.volume}
                    onChange={this.props.onChange.bind(this)}
                    type="volume"
                ></ProgressBar>
                <div style={{paddingLeft: '8px'}}>{parseInt(this.props.volume, 10) + '%'}</div>
            </div>
        );
    }
}

export default ControlBar;