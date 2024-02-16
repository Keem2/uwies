import { createContext, Dispatch, SetStateAction } from 'react'

//userContext interface
interface userContextInterface {
    user: {},
    setUser: Dispatch<SetStateAction<{}>>
}

//userContext
export const userContext = createContext<userContextInterface>({
    user: {},
    setUser: () => { }
})
