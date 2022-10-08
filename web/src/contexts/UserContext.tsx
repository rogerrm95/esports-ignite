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
    loginWithDiscord: () => Promise<void>,
    signOut: () => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: UserContextProvider) {
    const [isLoading, setIsLoading] = useState(true)
    const [userDiscord, setUserDiscord] = useState({} as UserDiscord)

    useEffect(() => {
        const dataJSON = localStorage.getItem("@esports:discord-user")

        if (dataJSON) {
            const user = JSON.parse(dataJSON)
            setIsLoading(false)
            setUserDiscord(user)
        } else {
            setUserDiscord({} as UserDiscord)
        }

    }, [])

    function saveUserDataToStorage(data: UserDiscord) {
        localStorage.setItem("@esports:discord-user", JSON.stringify(data))
    }

    function removeUserToStorage() {
        localStorage.removeItem("@esports:discord-user")
    }

    async function loginWithDiscord() {
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

            saveUserDataToStorage(userData)
            setUserDiscord(userData)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }

    function signOut() {
        removeUserToStorage()
        setUserDiscord({} as UserDiscord)
    }

    return (
        <UserContext.Provider value={{ userDiscord, isLoading, loginWithDiscord, signOut }}>
            {children}
        </UserContext.Provider>
    );
}