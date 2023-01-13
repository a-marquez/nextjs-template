// reference: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface GreeterState {
    name: number
    setName: (newName: string) => void
    setRandomName: () => void
    resetName: () => void
}

const useGreeterStore = create<GreeterState>()(
    immer((set) => ({
        name: '',
        setName: (newName) => set((state) => {
            state.name = newName
        }),
        setRandomName: async () => {
            const response = await fetch('https://api.sampleapis.com/futurama/characters/')
            const characters = await response.json()
            const randomCharacter = characters[Math.floor(Math.random() * characters.length)]
            const { first, last } = randomCharacter.name
            set((state) => { state.name = `${first} ${last}` })
        },
        resetName: () => set((state) => state.name = '')
    }))
)

export default useGreeterStore