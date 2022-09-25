import { useContext } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// Screens //
import { Login } from "../screens/Login"
import { Home } from '../screens/Home'
import { Game } from '../screens/Game'
import { UserContext } from "../contexts/UserContext"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    const { data } = useContext(UserContext)
    
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {
                data ? (
                    <Screen name='home' component={Home} />
                ) : (
                    <Screen name='login' component={Login} />
                )
            }
            <Screen name='game' component={Game} />
        </Navigator>
    )
}