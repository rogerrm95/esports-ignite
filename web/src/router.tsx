import { Routes, Route } from 'react-router-dom'
import { useUser } from './hooks/useUser'
// Pages //
import { Login } from './pages/Login'
import { Home } from './pages/Home'

export function Router() {
    const { userDiscord } = useUser()

    return (
        <Routes >
            {
                userDiscord.id ? (
                    <Route path='/' element={<Home />} />
                ) : (
                    <Route path='/' element={<Login />} />
                )
            }

        </Routes>
    )
}