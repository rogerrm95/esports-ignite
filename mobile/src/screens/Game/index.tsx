import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../services/axios';
// Types //
import { GameParams } from '../../@types/navigate';
// Icons & Images //
import Entypo from "@expo/vector-icons/Entypo"
import LogoImg from '../../assets/logo-nlw-esports.png'
// Components //
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { Heading } from '../../components/Heading';
// Styles //
import { styles } from './styles';
import { THEME } from '../../theme';

export function Game() {
    const navigation = useNavigation()
    const route = useRoute()
    const game = route.params as GameParams

    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState('')

    function handleGoBack() {
        navigation.goBack()
    }

    async function handleGetDiscordUser(adsId: string) {
        await api.get(`/ads/${adsId}/discord`)
            .then(res => setDiscordDuoSelected(res.data.discord))
            .catch(_ => alert('Erro'))
    }

    useEffect(() => {
        async function load() {
            await api.get(`/games/${game.id}/ads`)
                .then(res => setDuos(res.data))
                .catch(_ => console.log('Error'))
        }

        load()
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
                        <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={24}/>
                    </TouchableOpacity>

                    <Image source={LogoImg} style={styles.logo} />

                    <View style={styles.rigth}></View>
                </View>

                {/* BANNER */}
                <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode='cover' />

                {/* TÍTULO */}
                <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />

                {/* DUOS */}
                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
                    showsVerticalScrollIndicator
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Sem anúncios disponíveis!
                        </Text>
                    )}
                    renderItem={({ item }) => (
                        <DuoCard data={item} onConnect={() => handleGetDiscordUser(item.id)} />
                    )} />

                <DuoMatch
                    visible={discordDuoSelected.length > 0}
                    discord={discordDuoSelected}
                    onClose={() => setDiscordDuoSelected('')}
                />

            </SafeAreaView>
        </Background>
    );
}