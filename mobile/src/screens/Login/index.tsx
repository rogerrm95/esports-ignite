import { Image, Text, TouchableOpacity, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from 'expo-auth-session';
// Components //
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
// Imagem //
import LogoIMG from '../../assets/logo-nlw-esports.png'
import { DiscordLogo } from 'phosphor-react-native';
// Styles //
import { styles } from './styles';
import { THEME } from '../../theme';

export function Login() {

    async function handleLoginWithDiscord(){
        const response = await AuthSession.startAsync({
            authUrl: "https://discord.com/api/oauth2/authorize?client_id=1023413749194952745&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40rogerrm95%2Fesports&response_type=code&scope=identify",
        })

        console.log(response) //...
    } 

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={LogoIMG} style={styles.logo} />

                <Heading title='Entrar' subtitle='Entre com sua conta do Discord...' />

                <View style={styles.login}>
                    <TouchableOpacity style={styles.discordButton} onPress={handleLoginWithDiscord}>
                        <DiscordLogo size={20} color={THEME.COLORS.CAPTION_300}  weight='bold'/>

                        <Text style={styles.discordButtonText}>Conectar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Não possui conta ?
                        <Text 
                            style={styles.footerLink}
                            onPress={() => Linking.openURL('https://discord.com/login')}> Crie uma 🚀</Text>
                    </Text>
                </View>
            </SafeAreaView>
        </Background>
    );
}