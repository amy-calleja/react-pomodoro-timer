import React from 'react'

export default function Button(props) {
    return(
    <div className='Button'>
        <button className={props.activeClass} onClick={props.callback}>{props.title}</button>
    </div>
    )
}