import { useRef, useState } from "react";


const SimpleInput = (props) =>
{
  const nameInputRef = useRef()

  const [enteredName, setEnteredName] = useState('')

  const nameInputChangeHandler = (e) =>
  {
    setEnteredName(e.target.value)
  }

  const submitHandler = (e) => 
  {
    e.preventDefault()

    console.log(enteredName)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
