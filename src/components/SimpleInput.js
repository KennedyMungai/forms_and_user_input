import { useRef, useState } from "react";


const SimpleInput = (props) =>
{
  const nameInputRef = useRef()

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  const nameInputChangeHandler = (e) =>
  {
    setEnteredName(e.target.value)
  }

  const submitHandler = (e) => 
  {
    e.preventDefault()

    // console.log(enteredName)

    if (enteredName.trim().length === 0)
    {
      setEnteredNameIsValid(false)

      return
    }

    setEnteredNameIsValid(true)

    const enteredValue = nameInputRef.current.value

    console.log(enteredValue)

    setEnteredName('')
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
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
