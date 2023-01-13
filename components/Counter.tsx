import React, {useState} from 'react'

interface CounterProps {
    initialCount: number;
}

export default function Counter({initialCount}: CounterProps) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <button className='border border-black p-2' onClick={() => setCount(count + 1)}> + </button>
            <span className='p-2'>{count}</span>
            <button className='border border-black p-2' onClick={() => setCount(count - 1)}> - </button>
        </div>
    );
}