import { Routes, Route } from 'react-router-dom'
import { useUser } from './hooks/useUser'
// Pages //
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import { Landing } from './pages/Landing'

export function Router() {
    const { userDiscord } = useUser()

    return (
        <Routes>
            {
                userDiscord.id ? (
                    <>
                        <Route path='/' element={<Home />} />
                        <Route path='/games/:id/ads' element={<Game />} />
                    </>
                ) : (
                    <Route path='/' element={<Login />} />
                )
            }

            <Route path='/esports' element={<Landing />} />
        </Routes>
    )
}