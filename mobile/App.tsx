import { StatusBar, Text } from 'react-native';
// Components //
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
// Fonts //
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_700Bold, 
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar translucent backgroundColor='transparent' />

      {
        fontsLoaded ? <Home/> : <Loading/>
      }

    </Background>
  );
}


