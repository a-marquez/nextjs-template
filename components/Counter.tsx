import React, {useState} from 'react'
import Button from '@mui/material/Button'

interface CounterProps {
    initialCount: number;
}

export default function Counter({initialCount}: CounterProps) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <Button variant='contained' onClick={() => setCount(count + 1)}>+</Button>
            <span className='p-2'>{count}</span>
            <Button variant='contained' onClick={() => setCount(count - 1)}>-</Button>
        </div>
    );
}