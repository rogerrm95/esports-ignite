import { useState } from 'react'
import { View, ModalProps, Modal, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useUser } from '../../../hooks/useUser'
import api from '../../../services/axios';
// SCHEMA //
import { NewAdFormInputs, newAdFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller, } from 'react-hook-form'
// Icons //
import { GameController } from 'phosphor-react-native';
// Components //
import { CheckBox } from '../../Form/CheckBox';
import { DaysOfTheWeek } from '../../Form/DaysOfTheWeek';
import { ErrorMessage } from '../../ErrorMessage';
// Utils //
import { timesOfDay } from '../../../utils/timesOfDay';
// Styles //
import { styles } from './styles';
import { THEME } from '../../../theme';

type Game = {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        Ads: number
    }
}

interface CreateAdModalProps extends ModalProps {
    games: Game[],
    onClose: (modalStatus: boolean) => void
}

export function CreateAdModal({ games, onClose, ...rest }: CreateAdModalProps) {
    const { data } = useUser()

    // Registrar Inputs //
    const { handleSubmit, reset, control, formState: { errors, isValid } } = useForm<NewAdFormInputs>({
        resolver: zodResolver(newAdFormSchema),
        defaultValues: {
            discord: `${data.username}#${data.discriminator}`,
            username: data.username,
            yearsPlaying: '0'
        }
    })

    // Data //
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [hasUseVoiceChannel, setHasUseVoiceChannel] = useState(false)
    const [gameSelected, setGameSelected] = useState('')
    const [hourStart, setHourStart] = useState('')
    const [hourEnd, setHourEnd] = useState('')

    // CADASTRAR UM NOVO ANÚNCIO //
    async function handleCreateNewAd(adData: NewAdFormInputs) {
        try {

            if (!gameSelected || !weekDays) {
                return
            }

            await api.post(`/games/${gameSelected}/ads`, {
                username: adData.username,
                userId: data.id,
                bannerUrl: data.avatar,
                yearsPlaying: Number(adData.yearsPlaying),
                discord: adData.discord,
                weekDays: weekDays?.map(Number),
                hourStart,
                hourEnd,
                useVoiceChannel: hasUseVoiceChannel,
            }).then(() => {
                reset()
                onClose(false)
                alert('Anuncio criado com sucesso')
            })

        } catch (error) {
            alert('Erro ao criar anúncio')
        }
    }

    // Variáveis auxiliares //
    const isTheFormCompleted = isValid && (!!gameSelected && !!weekDays && !!hourStart && !!hourEnd)

    return (
        <Modal {...rest}>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
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
                                <Picker
                                    style={{ color: THEME.COLORS.TEXT }}
                                    dropdownIconColor={THEME.COLORS.TEXT}
                                    numberOfLines={1}
                                    selectedValue={gameSelected}
                                    onValueChange={(item: string) => setGameSelected(item)}>

                                    <Picker.Item label='Selecione um jogo...' value='' enabled={false} />
                                    {
                                        games.map(game => (
                                            <Picker.Item label={game.title} value={game.id} key={game.id} />
                                        ))
                                    }
                                </Picker>
                            </View>

                            {(!gameSelected && isValid) && <ErrorMessage message='Selecione o jogo' />}
                        </View>

                        {/* NOME - INPUT */}
                        <View>
                            <Text style={styles.label}>Seu nome (ou nickname)</Text>
                            <Controller
                                name='username'
                                control={control}
                                render={({ field: { onBlur, onChange, value } }) => (
                                    <TextInput style={styles.input}
                                        placeholder='Como te chamam dentro do game?'
                                        placeholderTextColor={THEME.COLORS.CAPTION_500}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value} />
                                )}
                            />

                            {errors.username && <ErrorMessage message={errors.username.message} />}
                        </View>

                        {/* TEMPO DE JOGO - INPUT */}
                        <View>
                            <Text style={styles.label}>Joga há quantos anos ?</Text>
                            <Controller
                                name='yearsPlaying'
                                rules={{ required: true }}
                                control={control}
                                render={({ field: { value, onBlur, onChange } }) => (
                                    <TextInput style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        contextMenuHidden
                                        keyboardType='numeric'
                                        placeholder='Tudo bem ser ZERO'
                                        placeholderTextColor={THEME.COLORS.CAPTION_500} />
                                )}
                            />

                            {errors.yearsPlaying && <ErrorMessage message={errors.yearsPlaying.message} />}
                        </View>

                        {/* DISCORD - INPUT */}
                        <View>
                            <Text style={styles.label}>Discord</Text>

                            <Controller
                                name='discord'
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { value, onBlur, onChange } }) => (
                                    <TextInput style={styles.input}
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder='Usuario#0000'
                                        placeholderTextColor={THEME.COLORS.CAPTION_500} />
                                )}
                            />

                            {errors.discord && <ErrorMessage message={errors.discord.message} />}
                        </View>

                        {/* DIAS DA SEMANA - CHECKBOX GROUP */}
                        <View>
                            <Text style={styles.label}>Quando costuma jogar?</Text>
                            <DaysOfTheWeek data={weekDays} onCheckedValue={(value) => setWeekDays(value)} />

                            {(weekDays.length === 0 && isValid) && <ErrorMessage message="Selecionar um dia da semana" />}
                        </View>

                        {/* HORÁRIOS - SELECTS */}
                        <View>
                            <Text style={styles.label}>Qual horário do dia?</Text>

                            <View style={styles.inputGroup}>
                                <View style={styles.selectDate}>
                                    <Picker
                                        style={{ color: THEME.COLORS.TEXT, width: "100%" }}
                                        dropdownIconColor={THEME.COLORS.TEXT}
                                        numberOfLines={1}
                                        selectedValue={hourStart}
                                        onValueChange={(time: string) => setHourStart(time)}>

                                        <Picker.Item value='' label='De' style={{ color: THEME.COLORS.CAPTION_400 }} enabled={false} />
                                        {
                                            timesOfDay.map(time => (
                                                <Picker.Item value={time} label={time} key={time} />
                                            ))
                                        }
                                    </Picker>
                                </View>

                                <View style={styles.selectDate}>
                                    <Picker
                                        style={{ color: THEME.COLORS.TEXT }}
                                        dropdownIconColor={THEME.COLORS.TEXT}
                                        numberOfLines={1}
                                        selectedValue={hourEnd}
                                        onValueChange={(time: string) => setHourEnd(time)}>

                                        <Picker.Item value='' label='Até' style={{ color: THEME.COLORS.CAPTION_400 }} enabled={false} />
                                        {
                                            timesOfDay.map(time => (
                                                <Picker.Item value={time} label={time} key={time} />
                                            ))
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {(!hourEnd && !hourStart && isValid) && <ErrorMessage message="Selecionar um dia da semana" />}
                        </View>

                        {/* CHAT DE VOZ - CHECKBOX */}
                        <View>
                            <CheckBox
                                style={styles.checkbox}
                                label='Costumo me conectar ao chat de voz'
                                backgroundCheckbox={THEME.COLORS.BACKGROUND_900}
                                iconColor={THEME.COLORS.SUCCESS}
                                onValueChange={(value) => setHasUseVoiceChannel(value)} />
                        </View>
                    </View>

                    {/* BOTÕES */}
                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => onClose(false)}>
                            <Text style={styles.buttonText}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={!isTheFormCompleted}
                            style={[styles.button, isTheFormCompleted ? styles.submitButton : styles.submitDisabledButton]}
                            onPress={handleSubmit(handleCreateNewAd)}>

                            <GameController size={16} color={THEME.COLORS.TEXT} style={{ marginRight: 8 }} />

                            <Text style={styles.buttonText}>
                                Encontrar Duo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    );
}