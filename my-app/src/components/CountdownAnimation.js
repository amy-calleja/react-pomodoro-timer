import React from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

export default function CountdownAnimation(key, timer, animation, children) {
    return(
        <div className='CountdownAnimation'>
        <CountdownCircleTimer>
            {children}
        </CountdownCircleTimer>
        </div>
    )
}