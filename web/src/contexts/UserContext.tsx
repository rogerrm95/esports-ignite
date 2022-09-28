import { createContext, ReactNode, useState, useEffect } from 'react';
import axios from 'axios';

interface UserContextProvider {
    children: ReactNode
}

export type UserDiscord = {
    id: string,
    username: string,
    discriminator: string,
    avatar: string,
}

interface UserContextData {
    userDiscord: UserDiscord,
    isLoading: boolean,
    saveUserDataToStorage: (data: UserDiscord) => void,
    removeUserToStorage: () => void,
    loginWithDiscord: () => Promise<void>,
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: UserContextProvider) {
    const [isLoading, setIsLoading] = useState(false)
    const [userDiscord, setUserDiscord] = useState({} as UserDiscord)

    useEffect(() => {
        setIsLoading(true)
        const dataJSON = localStorage.getItem("@esports:discord-user")

        if (dataJSON) {
            const user = JSON.parse(dataJSON)
            setIsLoading(false)
            setUserDiscord(user)
        } else {
            setIsLoading(false)
            setUserDiscord({} as UserDiscord)
        }

    }, [])

    function saveUserDataToStorage(data: UserDiscord) {
        setUserDiscord(data)
        localStorage.setItem("@esports:discord-user", JSON.stringify(data))
    }

    function removeUserToStorage() {
        localStorage.removeItem("@esports:discord-user")
    }

    async function loginWithDiscord() {
        setIsLoading(true)
        const fragment = new URLSearchParams(window.location.hash.slice(1));

        const accessToken = fragment.get('access_token')

        if (accessToken) {
            const userData = await axios.get('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            }).then(res => {
                return {
                    id: res.data.id,
                    username: res.data.username,
                    discriminator: res.data.discriminator,
                    avatar: res.data.avatar,
                }
            })

            setIsLoading(false)
            saveUserDataToStorage(userData)
            setUserDiscord(userData)
        }
    }

    return (
        <UserContext.Provider value={{ userDiscord, isLoading, saveUserDataToStorage, removeUserToStorage, loginWithDiscord }}>
            {children}
        </UserContext.Provider>
    );
}