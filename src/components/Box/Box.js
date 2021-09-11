import React, { useState } from 'react'
import './Box.css'
function Box(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [hobbies, setHobbies] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.onFormSubmit({
            name,
            email,
            age,
            hobbies,

        })
        setName('');
        setAge('');
        setEmail('');
        setHobbies('');
    }

    return (
        <div className={"boxmain"}>

            <form onSubmit={handleFormSubmit} className={"form"}>
                <div className="formGroup">
                    <label className={"label"}> Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="input" />
                </div>
                <div className="formGroup">
                    <label className={"label"}> Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
                </div>
                <div className="formGroup">
                    <label className={"label"}> Age</label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} className="input" />
                </div>
                <div className="formGroup">
                    <label className={"label"}> Hobbies</label>
                    <input value={hobbies} onChange={(e) => setHobbies(e.target.value)} className="input" />
                </div>
                <input className={"inputButton"} type="submit" />
            </form>
        </div>
    )
}

export default Box
