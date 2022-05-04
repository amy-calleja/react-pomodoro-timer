import React, { useCallback } from 'react'

export default function Button(props) {
    return(
    <div className='Button'>
        <button className={activeClass} onClick={callback}>{title}</button>
    </div>
    )
}