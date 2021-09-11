import React, { useState } from 'react'
import Box from '../Box/Box'
import List from '../List/List'
import './Home.css'
function Home() {

    const [formData, setFormData] = useState([])


    const handleFormSubmit = (e) => {
        setFormData((prevState) => {
            return [e, ...prevState]
        })
    }

    return (
        <div className={"main"}>
            <h3>DATA STORAGE APP</h3>
            <p>listing the data using map , key and stroring the objects in a state</p>
            <div className={"sub"}>
                <Box onFormSubmit={handleFormSubmit} />
            </div>
            <br />

            <h3> List of added items </h3>

            {
                formData?.map((data) => (
                    <List key={data.id} props={data} />
                ))
            }


        </div>
    )
}

export default Home
