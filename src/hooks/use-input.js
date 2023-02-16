import { useState } from 'react'

const useInput = (validateValue) =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangedHandler = (event) =>
    {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) =>
    {
        setIsTouched(true);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler
    }
}

export default useInput