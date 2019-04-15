import React, { Component } from 'react';
import Analogclock from './analog'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        }
        this.updateTime();
    }
    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            })
        }, 1000)
    }
    render() {
        return(
            <div class='flex'>
                <Analogclock  time={this.state.currentTime}/>
                <h1>Digital Clock</h1>
                <h1>{this.state.currentTime}</h1>
            </div>
            
            )
        }
    }
    export default Clock;