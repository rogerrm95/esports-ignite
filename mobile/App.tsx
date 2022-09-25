import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';
import { UserContextProvider } from './src/contexts/UserContext';
// Components //
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
// Fonts //
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter'
// Rotas //
import { Routes } from './src/routes';
// Notification   //
import './src/services/notificationConfig'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_900Black
  })

  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  useEffect(() => {
    getPushNotificationToken()
  })

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification)
    })

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })


    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])

  return (
    <UserContextProvider>
      <Background>
        <StatusBar translucent backgroundColor='transparent' />

        {
          fontsLoaded ? <Routes /> : <Loading />
        }

      </Background>
    </UserContextProvider>
  );
}


