import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import * as CheckBox from '@radix-ui/react-checkbox'
import * as ToggleGroupUI from '@radix-ui/react-toggle-group'
// Icons //
import { CaretDown, Check, GameController } from 'phosphor-react'
// Components //
import { Input } from "../Form/Input"
import { Select } from '../Form/Select'
import { FormEvent, useEffect, useState } from 'react'

interface Game {
    id: string,
    title: string,
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([])
    // Data //
    const [weekDays, setWeekDays] = useState<string[]>()
    const [hasUseVoiceChannel, setHasUseVoiceChannel] = useState(false)
    const [gameSelected, setGameSelected] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/games').then(res => {
            setGames(res.data)
        })
    }, [])

    // Salvar anúncio //
    async function handleCreateAd(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const formData = new FormData(event.target as HTMLFormElement)
            const data = Object.fromEntries(formData)

            if (!data.name) {
                return
            }

            await axios.post(`http://localhost:8080/games/${gameSelected}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays?.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: hasUseVoiceChannel
            })

            alert('Anuncio criado com sucesso')

        } catch (error) {
            alert("Erro ao criar o anúncio!")
            console.log(error)
        }
    }

    return (
        < Dialog.Portal >
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 shadow-lg shadow-black/25 text-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]'>
                <Dialog.Title className='text-3xl text-white font-black'>
                    Publique um anúncio
                </Dialog.Title>

                <form className='mt-8 flex flex-col gap-4' onSubmit={handleCreateAd}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                        <Select
                            label='Games'
                            name="game"
                            options={games}
                            onSelectedChange={(option) => setGameSelected(option)}
                            placeholder='Selecione o game que deseja jogar...'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input placeholder='Como te chamam dentro do game?' id='name' name='name' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input type='number' placeholder='Tudo bem ser ZERO' id='yearsPlaying' name='yearsPlaying' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="discord">Qual seu discord?</label>
                            <Input type='text' placeholder='Usuário#0000' id='discord' name='discord' />
                        </div>
                    </div>

                    <div className='flex gap-6'>
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
                        </div>

                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor="hourStart">Qual horário do dia?</label>

                            <div className='grid grid-cols-2 gap-2'>
                                <Input type='time' placeholder='De' id='hourStart' name='hourStart' />
                                <Input type='time' placeholder='Até' id='hourEnd' name='hourEnd' />
                            </div>
                        </div>
                    </div>

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
                            className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal >
    )
}