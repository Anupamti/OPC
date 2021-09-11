import React from 'react'
import Box from '../Box/Box'
import './Home.css'
function Home() {
    return (
        <div className={"main"}>
            <h3> this is a home component and Im sending diffrent props to the box component </h3>
            <div className={"sub"}>
                <Box props="One" />
                <Box props="two" />
                <Box props="three" />
                <Box props="four" />
            </div>

        </div>
    )
}

export default Home
