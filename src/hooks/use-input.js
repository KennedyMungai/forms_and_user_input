import { useState } from 'react'

const useInput = (props) =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
}

export default useInput