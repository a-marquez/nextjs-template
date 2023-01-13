import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import useGreeterStore from '../stores/useGreeterStore'

export default function Greeter() {
    const { name, setName, setRandomName } = useGreeterStore((state) => state)

    const greeting = name.length > 2  ? <div>Hello, {name}</div> : <div>Who are you?</div>
    return (
        <div className='flex flex-col'>
            {greeting}
            <TextField
                label='Name'
                variant='outlined'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Button variant='outlined' onClick={setRandomName}>Randomize</Button>
        </div>
    )
}