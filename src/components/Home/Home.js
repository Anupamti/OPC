import React, { useState } from 'react'
import Box from '../Box/Box'
import './Home.css'
function Home() {

    const [formData, setFormData] = useState()

    const handleFormSubmit = (e) => {
        setFormData(e)
        console.log(e)
    }

    return (
        <div className={"main"}>
            <h3>Sate Up lifting </h3>
            {
                formData && (
                    <>
                        getting the data from the child to parent component
                        <div style={{ display: "flex", justifyContent: 'space-evenly', width: '80%' }}>

                            <p>{formData?.name}</p>
                            <p>{formData?.age}</p>
                            <p>{formData?.email}</p>
                            <p>{formData?.hobbies}</p>
                        </div>
                    </>
                )
            }
            <div className={"sub"}>
                <Box onFormSubmit={handleFormSubmit} />
            </div>

        </div>
    )
}

export default Home
