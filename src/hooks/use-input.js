import { useState } from 'react'

const useInput = (props) =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = enteredName.trim() !== '';
    const hasError = !enteredNameIsValid && enteredNameTouched;
}

export default useInput