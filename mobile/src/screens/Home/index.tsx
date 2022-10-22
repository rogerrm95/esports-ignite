import { useEffect, useState, useContext } from 'react';
import { Image, FlatList, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/axios';
// Icons & Images //
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'
import logoIMG from '../../assets/logo-nlw-esports.png'
// Components //
import { Background } from '../../components/Background';
import { GameCard, GameCardData } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { Profile } from '../../components/Profile';
import { CreateAdModal } from '../../components/Modal/CreateAdModal';
// Styles //
import { styles } from './styles';
import { THEME } from '../../theme';

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        Ads: number
    }
}

export function Home() {
    const { navigate } = useNavigation()
    const { data } = useContext(UserContext)

    const [games, setGames] = useState<Game[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        async function load() {
            await api.get('/games')
                .then(res => setGames(res.data))
                .catch(_ => console.log('Error'))
        }

        load()
    }, [])

    function handleOpenGame({ bannerUrl, id, title }: GameCardData) {
        navigate('game', {
            id, bannerUrl, title
        })
    }

    function handleToggleModal() {
        setIsModalOpen(!isModalOpen)
    }

    function handleCreateAd(adId: string) {

        const newAdsCount = games.map(game => {
            if (adId === game.id) {
                return {
                    ...game,
                    _count: {
                        Ads: game._count.Ads + 1
                    }
                }
            } else {
                return game
            }
        })

        setGames(newAdsCount)
    }

    return (
        <Background>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        {/* CABEÇALHO */}
                        <View style={styles.header}>
                            <Profile data={data} />
                        </View>

                        {/* LOGO */}
                        <Image source={logoIMG} style={styles.logo} />

                        {/* TÍTULO */}
                        <Heading
                            title="Encontre seu duo!"
                            subtitle="Selecione o game que deseja jogar..." />

                        {/* LISTA DOS GAMES */}
                        <FlatList
                            data={games}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <GameCard data={item} onPress={() => handleOpenGame(item)} />
                            )}
                            contentContainerStyle={styles.contentList}
                        />

                        {/* CRIAR ANÚNCIO - BANNER */}
                        <View style={styles.adBanner}>
                            <View style={styles.bannerContent}>
                                <View>
                                    <Text style={styles.bannerTitle}>Não encontrou seu Duo ?</Text>
                                    <Text style={styles.bannerLegend}>Publique um anúncio e encontre novos players!</Text>
                                </View>

                                <Entypo name='game-controller' size={24} color={THEME.COLORS.CAPTION_500} />
                            </View>

                            <TouchableOpacity style={styles.buttonNewAd} onPress={handleToggleModal}>
                                <FontAwesome name='search-plus' color={THEME.COLORS.TEXT} size={16} />
                                <Text style={styles.buttonNewAdLabel}>Novo anúnico</Text>
                            </TouchableOpacity>
                        </View>

                        {/* CRIAR ANÚNCIO - MODAL */}
                        <CreateAdModal
                            transparent
                            games={games}
                            visible={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            onClose={(modalStatus) => setIsModalOpen(modalStatus)}
                            onCreateAd={(adId) => handleCreateAd(adId)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Background >
    );
}