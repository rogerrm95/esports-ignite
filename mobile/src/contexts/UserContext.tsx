import { createContext, ReactNode, useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

interface UserContextProvider {
    children: ReactNode
}

export type User = {
    id: string,
    username: string,
    discriminator: string,
    avatar: string,
}

interface UserContextData {
    data: User,
    isLoading: boolean,
    saveUserDataToAsyncStorage: (data: User) => Promise<void>,
    removeUserToAsyncStorage: () => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: UserContextProvider) {
    const { getItem, setItem, removeItem } = useAsyncStorage("@esports:discord-user")

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<User>({} as User)

    useEffect(() => {
        async function loadUserData() {
            const dataJSON = await getItem()

            if (dataJSON) {
                const user = JSON.parse(dataJSON)
                setIsLoading(false)
                setData(user)
            } else {
                setIsLoading(false)
                setData({} as User)
            }
        }

        loadUserData()
    }, [])

    async function saveUserDataToAsyncStorage(data: User) {
        setIsLoading(true)
        setData(data)
        await setItem(JSON.stringify(data)).then(_ => setIsLoading(false))
    }

    async function removeUserToAsyncStorage() {
        setIsLoading(true)
        await removeItem().then(_ => {
            setIsLoading(false)
            setData({})
        })
    }

    return (
        <UserContext.Provider value={{ data, isLoading, saveUserDataToAsyncStorage, removeUserToAsyncStorage }}>
            {children}
        </UserContext.Provider>
    );
}