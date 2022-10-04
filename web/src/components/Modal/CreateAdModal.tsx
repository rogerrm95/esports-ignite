import { useEffect, useState } from 'react'
import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import * as CheckBox from '@radix-ui/react-checkbox'
import * as ToggleGroupUI from '@radix-ui/react-toggle-group'
// Validation //
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from 'react-hook-form'
// Icons //
import { Check, GameController, Spinner } from 'phosphor-react'
// Components //
import { Input } from "../Form/Input"
import { ErrorMessage } from '../ErrorMessage'
import { Select } from '../Form/Select'
import { useUser } from '../../hooks/useUser'

// Regex //
const discordRegex = new RegExp('^.{3,32}#[0-9]{4}$')

// Schema //
const newAdFormSchema = z.object({
    username: z.string().min(2, { message: "Digitar ao menos 2 letras" }),
    yearsPlaying: z.string().min(1, { message: "Necessário preenchimento" }).max(2, { message: "Valor menor que 100" }),
    discord: z.string().regex(discordRegex, { message: 'Padrão nome#0000' }),
    hourStart: z.string().min(5, { message: 'Informar horário' }),
    hourEnd: z.string().min(5, { message: 'Informar horário' })
})

type NewAdFormInputs = z.infer<typeof newAdFormSchema>

interface Game {
    id: string,
    title: string,
}

export function CreateAdModal() {
    const { userDiscord } = useUser()

    const methods = useForm<NewAdFormInputs>({
        resolver: zodResolver(newAdFormSchema),
        defaultValues: {
            discord: `${userDiscord.username}#${userDiscord.discriminator}`,
            username: userDiscord.username
        }
    })

    const { formState: { errors, isValid, isSubmitting }, handleSubmit, register, reset } = methods

    const [games, setGames] = useState<Game[]>([])
    // Data //
    const [weekDays, setWeekDays] = useState<string[]>()
    const [hasUseVoiceChannel, setHasUseVoiceChannel] = useState(false)
    const [gameSelected, setGameSelected] = useState('')

    // API - Carregar os jogos do Back-End //
    useEffect(() => {
        axios.get('http://localhost:8080/games').then(res => {
            setGames(res.data)
        })
    }, [])

    // Salvar anúncio //
    async function handleCreateAd(data: NewAdFormInputs) {
        try {

            if (!gameSelected || !weekDays) {
                return
            }

            await axios.post(`http://localhost:8080/games/${gameSelected}/ads`, {
                username: data.username,
                userId: userDiscord.id,
                bannerUrl: userDiscord.avatar,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays?.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: hasUseVoiceChannel
            })

            alert('Anuncio criado com sucesso')
            reset()
        } catch (error) {
            alert("Erro ao criar o anúncio!")
        }
    }

    return (
        <FormProvider {...methods}>
            < Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

                <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 shadow-lg shadow-black/25 text-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]'>
                    <Dialog.Title className='text-3xl text-white font-black'>
                        Publique um anúncio
                    </Dialog.Title>

                    <form className='mt-8 flex flex-col gap-4' onSubmit={handleSubmit(handleCreateAd)}>
                        <div className='flex flex-col gap-2'>
                            {/* JOGO */}
                            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                            <Select
                                label='Games'
                                options={games}
                                onSelectedChange={(option) => setGameSelected(option)}
                                placeholder='Selecione o game que deseja jogar...'
                                name='game'
                            />
                            {(!gameSelected && isValid) && <ErrorMessage message={"Selecionar o jogo"} />}
                        </div>

                        {/* USUÁRIO */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="username">Seu nome (ou nickname)</label>
                            <Input
                                id='username'
                                placeholder='Como te chamam dentro do game?'
                                registerName='username'
                                name='username'
                            />
                            {errors.username && <ErrorMessage message={errors.username.message} />}
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            {/* ANOS JOGANDO */}
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                <Input
                                    id='yearsPlaying'
                                    placeholder='Tudo bem ser ZERO'
                                    type='number'
                                    min="0"
                                    max="99"
                                    name='yearsPlaying'
                                    registerName='yearsPlaying'
                                />
                                {errors.yearsPlaying && <ErrorMessage message={errors.yearsPlaying.message} />}
                            </div>

                            {/* DISCORD */}
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="discord">Qual seu discord?</label>
                                <Input
                                    type='text'
                                    placeholder='Usuário#0000'
                                    id='discord'
                                    registerName='discord' />
                                {errors.discord && <ErrorMessage message={errors.discord.message} />}
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            {/* DIAS DA SEMANA */}
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="weekDays">Quando costuma jogar?</label>
                                <ToggleGroupUI.Root
                                    type='multiple'
                                    className='grid grid-cols-4 gap-2'
                                    onValueChange={setWeekDays}
                                    value={weekDays}
                                    aria-label='Dias da semana'>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="0"
                                        aria-label='Domingo'
                                        title='Domingo'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        D
                                    </ToggleGroupUI.ToggleGroupItem>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="1"
                                        aria-label='Segunda-Feira'
                                        title='Segunda-Feira'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        S
                                    </ToggleGroupUI.ToggleGroupItem>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="2"
                                        aria-label='Terça-Feira'
                                        title='Terça-Feira'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        T
                                    </ToggleGroupUI.ToggleGroupItem>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="3"
                                        aria-label='Quarta-Feira'
                                        title='Quarta-Feira'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        Q
                                    </ToggleGroupUI.ToggleGroupItem>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="4"
                                        title='Quinta-Feira'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        Q
                                    </ToggleGroupUI.ToggleGroupItem>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="5"
                                        title='Sexta-Feira'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        S
                                    </ToggleGroupUI.ToggleGroupItem>

                                    <ToggleGroupUI.ToggleGroupItem
                                        value="6"
                                        title='Sábado'
                                        className={`w-8 h-8 rounded ${weekDays?.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                                        S
                                    </ToggleGroupUI.ToggleGroupItem>
                                </ToggleGroupUI.Root>

                                {(!weekDays && isValid) && <ErrorMessage message={"Selecionar o jogo"} />}
                            </div>

                            {/* HORÁRIOS */}
                            <div className='flex flex-col gap-2 flex-1'>
                                <label htmlFor="hourStart">Qual horário do dia?</label>

                                <div className='grid grid-cols-2 gap-2'>
                                    <Input
                                        type='time'
                                        id='hourStart'
                                        placeholder='De'
                                        registerName='hourStart' />

                                    <Input
                                        type='time'
                                        id='hourEnd'
                                        placeholder='Até'
                                        registerName='hourEnd' />
                                </div>

                                {
                                    (errors.hourStart || errors.hourEnd) && <ErrorMessage message={"Informar os horários"} />
                                }

                            </div>
                        </div>

                        {/* CHAT DE VOZ ? */}
                        <label className='mt-2 flex gap-2 text-sm items-center'>
                            <CheckBox.Root className='w-6 h-6 rounded bg-zinc-900 p-1' checked={hasUseVoiceChannel} onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setHasUseVoiceChannel(true)
                                } else {
                                    setHasUseVoiceChannel(false)
                                }
                            }}>
                                <CheckBox.Indicator>
                                    <Check size={16} className='text-emerald-400' />
                                </CheckBox.Indicator>
                            </CheckBox.Root>
                            Costumo me conectar no chat de voz
                        </label>

                        {/* GRUPO DE BOTÕES */}
                        <footer className='mt-4 flex justify-end gap-4'>
                            <Dialog.Close
                                className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold'>
                                Cancelar
                            </Dialog.Close>

                            <button
                                type='submit'
                                disabled={!gameSelected || !weekDays}
                                className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-violet-500'>

                                {
                                    isSubmitting ? (
                                        <>
                                            <Spinner size={20} className='animate-spin-slow' />
                                        </>
                                    ) : (
                                        <>
                                            <GameController size={24} />
                                            Encontrar duo
                                        </>
                                    )
                                }
                            </button>
                        </footer>
                    </form>
                </Dialog.Content>
            </Dialog.Portal >
        </FormProvider>
    )
}