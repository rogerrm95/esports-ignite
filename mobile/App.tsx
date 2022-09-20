import { StatusBar } from 'react-native';
// Components //
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
// Fonts //
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
// Rotas //
import { Routes } from './src/routes';

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
        fontsLoaded ? <Routes/> : <Loading/>
      }

    </Background>
  );
}


