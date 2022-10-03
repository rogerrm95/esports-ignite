import { Routes, Route, Link } from 'react-router-dom'
import { useUser } from './hooks/useUser'
// Pages //
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Game } from './pages/Game'

export function Router() {
    const { userDiscord } = useUser()

    return (
        <Routes >
            {
                userDiscord.id ? (
                    <Route>
                        <Route path='/' element={<Home />} />
                        <Route path='/games/:id/ads' element={<Game />} />
                    </Route>
                ) : (
                    <Route path='/' element={<Login />} />
                )
            }

        </Routes>
    )
}