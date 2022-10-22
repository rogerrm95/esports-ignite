import { useState } from 'react'
import { Image, Text, TouchableOpacity, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from 'expo-auth-session';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
// Contexts //
import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
// Components //
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading';
// Imagem //
import LogoIMG from '../../assets/logo-nlw-esports.png'
import { DiscordLogo } from 'phosphor-react-native';
// Styles //
import { styles } from './styles';
import { THEME } from '../../theme';

export function Login() {
    const { isLoading, saveUserDataToAsyncStorage } = useContext(UserContext)
    const { navigate } = useNavigation()
    
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    async function handleLoginWithDiscord() {
        setIsAuthenticating(true)
        const response = await AuthSession.startAsync({
            authUrl: "https://discord.com/api/oauth2/authorize?client_id=1023413749194952745&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40rogerrm95%2Fesports&response_type=token&scope=identify",
        })

        if (response.type === 'success') {
            const user = await axios.get(`https://discord.com/api/users/@me`, {
                headers: {
                    'authorization': `Bearer ${response.params.access_token}`
                }
            }).then(res => {
                return {
                    id: res.data.id,
                    username: res.data.username,
                    discriminator: res.data.discriminator,
                    avatar: res.data.avatar,
                }
            })

            await saveUserDataToAsyncStorage(user).then(_ => {
                navigate('home')
                setIsAuthenticating(false)
            })
        }
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                {
                    (isLoading || isAuthenticating) ? (
                        <Loading />
                    ) : (
                        <Fragment>
                            <Image source={LogoIMG} style={styles.logo} />

                            <Heading title='Entrar' subtitle='Entre com sua conta do Discord...' />

                            <View style={styles.login}>
                                <TouchableOpacity style={styles.discordButton} onPress={handleLoginWithDiscord}>
                                    <DiscordLogo size={20} color={THEME.COLORS.CAPTION_300} weight='bold' />

                                    <Text style={styles.discordButtonText}>Conectar com Discord</Text>
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
                        </Fragment>
                    )
                }


            </SafeAreaView>
        </Background>
    );
}