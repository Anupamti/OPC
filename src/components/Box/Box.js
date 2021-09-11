import React from 'react'
import './Box.css'
function Box({ props }) {
    return (
        <div className={"boxmain"}>
            this is a box component with {props} props
        </div>
    )
}

export default Box
