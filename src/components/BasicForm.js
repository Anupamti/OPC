import React, { useState } from 'react'
const BasicForm = (props) => {


  const [enteredFirstName, setEnteredFirstName] = useState("")
  const [entredFirstNameTouched, setEnteredFirstNameTouched] = useState()

  const isFirstNameValid = enteredFirstName.trim() === "";
  const firstNameInputisvalid = isFirstNameValid && entredFirstNameTouched

  const handleFirstNameTouched = () => {
    setEnteredFirstNameTouched(true)

  }


  const handleFirstNameChange = (e) => {
    setEnteredFirstName(`"${e.target.value}"`)
    setEnteredFirstNameTouched(false)

  }




  const [enteredLastName, setEnteredLastName] = useState("")
  const [entredLastNameTouched, setEnteredLastNameTouched] = useState()

  const isLastNameValid = enteredLastName.trim() === "";
  const lastNameInputisvalid = isLastNameValid && entredLastNameTouched

  const handleLastNameTouched = () => {
    setEnteredLastNameTouched(true)

  }


  const handleLastNameChange = (e) => {
    setEnteredLastName(`"${e.target.value}"`)
    setEnteredLastNameTouched(false)

  }


  const [enteredEmail, setEnteredEmail] = useState("")
  const [entredEmailTouched, setEnteredEmailTouched] = useState()

  const isEmailValid = enteredEmail.trim() === "";
  const emailInputisvalid = isEmailValid && entredEmailTouched

  const handleEmailTouched = () => {
    setEnteredEmailTouched(true)

  }


  const handleEmailChange = (e) => {
    setEnteredEmail(`"${e.target.value}"`)
    setEnteredEmailTouched(false)

  }



  const onFormSubmit = (e) => {
    e.preventDefault();


    if (firstNameInputisvalid || lastNameInputisvalid || emailInputisvalid) {
      return
    }
    setEnteredFirstNameTouched(true)

  }


  const formStyleControlled = firstNameInputisvalid || lastNameInputisvalid || emailInputisvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onFormSubmit}>
      <div className='control-group'>
        <div className={formStyleControlled}>
          <label htmlFor='name'>First Name</label>
          <input type='text' onBlur={handleFirstNameTouched} onChange={handleFirstNameChange} id='name' />
          {
            firstNameInputisvalid && (<p className='error-text'>Name must not be empty</p>)
          }
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input onChange={handleLastNameChange} onBlur={handleLastNameTouched} type='text' id='name' />
          {
            lastNameInputisvalid && (<p className='error-text'>Name must not be empty</p>)
          }
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={handleEmailChange} onBlur={handleEmailTouched} type='text' id='name' />
        {
          emailInputisvalid && (<p className='error-text'>Name must not be empty</p>)
        }
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
