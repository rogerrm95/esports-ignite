import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { CheckCircle, Spinner, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface UserDiscordModal {
    discordId: string | null
}

export function UserDiscordModal({ discordId }: UserDiscordModal) {
    const [discordUsername, setDiscordUsername] = useState('')

    useEffect(() => {
        async function getUsernameDiscord() {
            if (discordId) {
                await axios.get(`ads/${discordId}/discord`).then(res => setDiscordUsername(res.data))
            }
        }

        getUsernameDiscord()
    }, [discordId])

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2a2634] flex flex-col items-center py-8 px-10 shadow-lg shadow-black/25 text-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]'>
                <CheckCircle size={54} className='mb-6 text-emerald-500' weight='bold' />

                <Dialog.Close className='top-5 right-5 absolute'>
                    <X size={24} className='text-zinc-500 hover:text-red-900' weight='regular' />
                </Dialog.Close>

                <Dialog.Title className='text-3xl text-white font-black'>
                    Let's play!
                </Dialog.Title>

                <Dialog.Description className='text-zinc-400 leading-[160%]'>
                    Agora é só começar a jogar!
                </Dialog.Description>


                <p className='mt-6 font-semibold'>
                    Adicione no Discord
                </p>

                <button className='bg-zinc-900 h-12 w-[100%] mt-8 rounded hover:text-violet-500 flex items-center justify-center'>
                    {
                        discordUsername ? discordUsername : <Spinner size={16} className='animate-spin-slow' />
                    }
                </button>
            </Dialog.Content>
        </Dialog.Portal>
    )
}