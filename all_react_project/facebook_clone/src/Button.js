import React from 'react'
import './Button.css'
export default function Button({type,onClick}) {
    return (
        <div className="button">
        <button type={type} onClick={onClick}>Sign in With facebook</button>
        </div>
    )
}
