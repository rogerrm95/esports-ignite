import { useEffect, useState, useContext } from 'react';
import { Image, FlatList, View, TouchableOpacity, Text, TextInput, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext';
import { Picker } from '@react-native-picker/picker';
import { timesOfDay } from '../../utils/timesOfDay';
import api from '../../services/axios';
// Icons & Images //
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'
import { GameController } from 'phosphor-react-native';
import logoIMG from '../../assets/logo-nlw-esports.png'
// Components //
import { Background } from '../../components/Background';
import { GameCard, GameCardData } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { Profile } from '../../components/Profile';
import { CheckBox } from '../../components/Form/CheckBox';
import { DaysOfTheWeek } from '../../components/Form/DaysOfTheWeek';
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

    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

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

    function handleSubmit() {
        const data = {
            useVoiceChannel,
            weekDays
        }

        console.log(data)
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
                        <Modal visible={isModalOpen} transparent animationType="slide" onRequestClose={() => setIsModalOpen(!isModalOpen)}>
                            <View style={styles.containerModal}>
                                <View style={styles.contentModal}>
                                    {/* TÍTULO */}
                                    <Text style={styles.title}>
                                        Publique um anúncio
                                    </Text>

                                    {/* FORMULÁRIO */}
                                    <View style={styles.form}>
                                        {/* JOGO - SELECT */}
                                        <View>
                                            <Text style={styles.label}>Qual o game ?</Text>

                                            <View style={styles.select}>
                                                <Picker style={{ color: THEME.COLORS.TEXT }} dropdownIconColor={THEME.COLORS.TEXT} numberOfLines={1}>
                                                    <Picker.Item label='Selecione um jogo...' value='' enabled={false} />
                                                    {
                                                        games.map(game => (
                                                            <Picker.Item label={game.title} value={game.title} key={game.id} />
                                                        ))
                                                    }
                                                </Picker>
                                            </View>
                                        </View>

                                        {/* NOME - INPUT */}
                                        <View>
                                            <Text style={styles.label}>Seu nome (ou nickname)</Text>
                                            <TextInput style={styles.input}
                                                placeholder='Como te chamam dentro do game?'
                                                placeholderTextColor={THEME.COLORS.CAPTION_500} />
                                        </View>

                                        {/* TEMPO DE JOGO - INPUT */}
                                        <View>
                                            <Text style={styles.label}>Joga há quantos anos ?</Text>
                                            <TextInput style={styles.input}
                                                contextMenuHidden
                                                keyboardType='numeric'
                                                placeholder='Tudo bem ser ZERO'
                                                placeholderTextColor={THEME.COLORS.CAPTION_500} />
                                        </View>

                                        {/* DISCORD - INPUT */}
                                        <View>
                                            <Text style={styles.label}>Discord</Text>
                                            <TextInput style={styles.input}
                                                placeholder='Usuario#0000'
                                                placeholderTextColor={THEME.COLORS.CAPTION_500} />
                                        </View>

                                        {/* DIAS DA SEMANA - INPUT */}
                                        <View>
                                            <Text style={styles.label}>Quando costuma jogar?</Text>
                                            <DaysOfTheWeek data={weekDays} onCheckedValue={(value) => setWeekDays(value)} />
                                        </View>

                                        {/* HORÁRIOS - SELECTS */}
                                        <View>
                                            <Text style={styles.label}>Qual horário do dia?</Text>

                                            <View style={styles.inputGroup}>
                                                <View style={styles.selectDate}>
                                                    <Picker style={{ color: THEME.COLORS.TEXT, width: "100%" }} dropdownIconColor={THEME.COLORS.TEXT} numberOfLines={1}>
                                                        <Picker.Item value='' label='De' style={{ color: THEME.COLORS.CAPTION_400 }} enabled={false} />
                                                        {
                                                            timesOfDay.map(time => (
                                                                <Picker.Item value={time} label={time} key={time} />
                                                            ))
                                                        }
                                                    </Picker>
                                                </View>

                                                <View style={styles.selectDate}>
                                                    <Picker style={{ color: THEME.COLORS.TEXT }} dropdownIconColor={THEME.COLORS.TEXT} numberOfLines={1}>
                                                        <Picker.Item value='' label='Até' style={{ color: THEME.COLORS.CAPTION_400 }} enabled={false} />
                                                        {
                                                            timesOfDay.map(time => (
                                                                <Picker.Item value={time} label={time} key={time} />
                                                            ))
                                                        }
                                                    </Picker>
                                                </View>
                                            </View>
                                        </View>

                                        {/* CHAT DE VOZ - CHECKBOX */}
                                        <View>
                                            <CheckBox
                                                style={styles.checkbox}
                                                label='Costumo me conectar ao chat de voz'
                                                backgroundCheckbox={THEME.COLORS.BACKGROUND_900}
                                                iconColor={THEME.COLORS.SUCCESS}
                                                onValueChange={(value) => setUseVoiceChannel(value)} />
                                        </View>
                                    </View>

                                    {/* BOTÕES */}
                                    <View style={styles.buttons}>
                                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setIsModalOpen(false)}>
                                            <Text style={styles.buttonText}>
                                                Cancelar
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
                                            <GameController size={16} color={THEME.COLORS.TEXT} style={{ marginRight: 8 }} />

                                            <Text style={styles.buttonText}>
                                                Encontrar Duo
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Background >
    );
}