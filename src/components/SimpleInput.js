import { useEffect, useState } from "react";


const SimpleInput = (props) =>
{
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''

  useEffect(() =>
  {
    if (enteredNameIsValid)
    {
      setFormIsValid(true)
    }
    else
    {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid,])


  const nameInputChangeHandler = (e) =>
  {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = () =>
  {
    setEnteredNameIsTouched(true)
  }

  const submitHandler = (e) => 
  {
    e.preventDefault()

    if (!enteredNameIsValid)
    {
      return
    }

    setEnteredNameIsTouched(true)

    setEnteredName('')
    setEnteredNameIsTouched(false)
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
