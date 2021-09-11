import React from 'react'
import './List.css'
function List({ props }) {
    return (
        <div className={"listContainer"}>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Email : {props.email}</p>
            <p>Hobbies : {props.hobbies}</p>
        </div>
    )
}

export default List
