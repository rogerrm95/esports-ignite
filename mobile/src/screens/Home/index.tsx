import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/axios';
// LOGO //
import logoIMG from '../../assets/logo-nlw-esports.png'
// Components //
import { Background } from '../../components/Background';
import { GameCard, GameCardData } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
// Styles //
import { styles } from './styles';

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

    const [games, setGames] = useState<Game[]>([])

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

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoIMG} style={styles.logo} />

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
            </SafeAreaView>
        </Background>

    );
}