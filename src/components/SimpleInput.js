import { useState } from "react";

const SimpleInput = (props) => {


  const [enteredFirstName, setEnteredFirstName] = useState()
  const [entredFirstNameTouched, setEnteredFistNameTouched] = useState()

  const isFirstNameValid = enteredFirstName !== '';
  const firstNameInputisvalid = isFirstNameValid && entredFirstNameTouched

  const handleFirstNameTouched = () => {
    setEnteredFistNameTouched(true)

  }


  const handleFirstNameChange = (e) => {
    setEnteredFirstName(e.target.value)
    setEnteredFistNameTouched(false)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEnteredFistNameTouched(true)

    if (!firstNameInputisvalid) {
      return
    }

  }
  const formStyleControlled = firstNameInputisvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onFormSubmit}>
      <div className={formStyleControlled}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={handleFirstNameChange} onBlur={handleFirstNameTouched} type='text' id='name' />
        {
          firstNameInputisvalid && (<p className='error-text'>Name must not be empty</p>)
        }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
