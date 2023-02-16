import { useState } from 'react'

const useInput = (props) =>
{
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
}

export default useInput