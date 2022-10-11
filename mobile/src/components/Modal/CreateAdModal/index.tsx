import { useState } from 'react'
import { View, ModalProps, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useUser } from '../../../hooks/useUser'
// SCHEMA //
import { NewAdFormInputs, newAdFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
// Icons //
import { GameController } from 'phosphor-react-native';
// Components //
import { CheckBox } from '../../Form/CheckBox';
import { DaysOfTheWeek } from '../../Form/DaysOfTheWeek';
// Utils //
import { timesOfDay } from '../../../utils/timesOfDay';
// Styles //
import { styles } from './styles';
import { THEME } from '../../../theme';
import axios from 'axios';

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
    const { handleSubmit, reset, control, formState: { errors } } = useForm<NewAdFormInputs>({
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

    async function handleCreateNewAd(adData: NewAdFormInputs) {
        try {
            if (!gameSelected || !weekDays) {
                return
            }

            const ad = {
                username: adData.username,
                userId: data.id,
                bannerUrl: data.avatar,
                yearsPlaying: Number(adData.yearsPlaying),
                discord: adData.discord,
                weekDays: weekDays?.map(Number),
                hourStart,
                hourEnd,
                useVoiceChannel: hasUseVoiceChannel,
            }

            await axios.post(`http://localhost:8080/games/${gameSelected}/ads`, ad)
                .then(() => {
                    reset()
                    onClose(false)
                    alert('Anuncio criado com sucesso')
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal {...rest}>
            <View style={styles.container}>
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
                        </View>

                        {/* NOME - INPUT */}
                        <View>
                            <Text style={styles.label}>Seu nome (ou nickname)</Text>
                            <Controller
                                name='username'
                                rules={{ required: true }}
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
                        </View>

                        {/* DIAS DA SEMANA - CHECKBOX GROUP */}
                        <View>
                            <Text style={styles.label}>Quando costuma jogar?</Text>
                            <DaysOfTheWeek data={weekDays} onCheckedValue={(value) => setWeekDays(value)} />
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

                        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit(handleCreateNewAd)}>
                            <GameController size={16} color={THEME.COLORS.TEXT} style={{ marginRight: 8 }} />

                            <Text style={styles.buttonText}>
                                Encontrar Duo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}