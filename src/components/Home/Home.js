import React, { useEffect, useState } from 'react'
import Box from '../Box/Box'
import List from '../List/List'
import './Home.css'
function Home() {

    const [formData, setFormData] = useState([])
    const [listContent, setListContent] = useState()

    const handleFormSubmit = (e) => {
        setFormData((prevState) => {
            return [e, ...prevState]
        })
    }

    useEffect(() => {
        if (formData.length === 0) {
            setListContent(<h3>NO Content Found</h3>)
        }
        else {
            setListContent(
                formData?.map((data) => (
                    <List key={data.id} props={data} />
                ))
            )
        }
    }, [formData.length])

    return (
        <div className={"main"}>
            <h3>DATA STORAGE APP</h3>
            <p> Conditional Content</p>
            <div className={"sub"}>
                <Box onFormSubmit={handleFormSubmit} />
            </div>
            <br />

            <h3> List of added items </h3>
            {listContent}

        </div>
    )
}

export default Home
