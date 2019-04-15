import React from 'react';
import clockbg from './clock.png';
import pin from './pin2.png';

function Analogclock(props) {
    let time = new Date(props.time);
    let clockContainer = {
        backgroundImage : 'url('+ clockbg +')',
        backgroundSize: 'cover',
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    }
    let secHand = {
        position: 'relative',
        top: 102,
        left: 97,
        width: '40%',
        height: 9,
        transform: 'rotate('+ ((time.getSeconds()/60)*360 - 90 ).toString() +'deg)',
        transformOrigin: '0% 0%',
        backgroundImage : 'url('+ pin +')',
        backgroundSize: 'cover',
        backgroundPosition :'center',
        zIndex: 1
    }
    let minHand = {
        position: 'relative',
        top: 90,
        left: 100,
        width: '35%',
        height: 9,
        transform: 'rotate('+ ((time.getMinutes()/60)*360 - 90 ).toString() +'deg)',
        transformOrigin: '0% 0%',
        backgroundImage : 'url('+ pin +')',
        backgroundPosition :'center',
        backgroundSize: 'cover'
    }
    let hrHand = {
        position: 'relative',
        top: 80,
        left: 95,
        width: '25%',
        height: 9,
        transform: 'rotate('+ ((time.getHours()/12)*360 - 90 ).toString() +'deg)',
        transformOrigin: '0% 0%',
        backgroundImage : 'url('+ pin +')',
        backgroundPosition :'center',
        backgroundSize: 'cover'
    }

    return(
        <div style={clockContainer}>
            <div style={secHand}></div>
            <div style={minHand}></div>
            <div style={hrHand}></div>
        </div>
    )
}
export default Analogclock;