import { useState } from 'react'

const useInput = (props) =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
}

export default useInput