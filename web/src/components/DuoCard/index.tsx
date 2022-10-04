import { GameController } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'
import { UserDiscordModal } from "../Modal/UserDiscordModal";
import { useState } from "react";

interface DuoCardProps {
    id: string,
    bannerUrl: string,
    username: string,
    userId: string,
    hourEnd: string,
    hourStart: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearsPlaying: number,
}

interface Props {
    data: DuoCardProps,
    onConnect?: () => void,
}

export function DuoCard({ data }: Props) {
    const [adSelectedId, setAdSelectedId] = useState('')

    return (
        <li className="w-[100%] h-[84px] flex justify-between items-center rounded-lg bg-[#2A2634] overflow-hidden pl-5">
            <img
                className="w-12 h-12 rounded hidden md:block"
                src={`https://cdn.discordapp.com/avatars/${data.userId}/${data.bannerUrl}`}
                alt={data.username}
                title="Foto de Perfil" />

            <div className="flex justify-between flex-1 px-4">

                <div className="flex flex-col text-sm">
                    <p className="text-zinc-400">Nome</p>
                    <span className="text-white font-semibold">{data.username}</span>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:justify-center text-sm">
                    <p className="text-zinc-400">Tempo de jogo</p>
                    <span className="text-white ont-semibold">{data.yearsPlaying} ano(s)</span>
                </div>

                <div className="flex flex-col items-center justify-center text-sm text-center">
                    <p className="text-zinc-400">Disponibilidade</p>
                    <span className="text-white font-semibold">
                        {`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
                    </span>
                </div>

                <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center text-sm">
                    <p className="text-zinc-400">Chamada de áudio</p>
                    <span className={`text-white font-semibold ${data.useVoiceChannel ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                        {data.useVoiceChannel ? 'Sim' : 'Não'}
                    </span>
                </div>
            </div>

            {/* MODAL - DISCORD ID */}
            <Dialog.Root>
                <Dialog.Trigger onClick={() => setAdSelectedId(data.userId)}
                    className="h-[100%] bg-violet-500 hover:bg-violet-600 flex items-center justify-center text-md text-white font-semibold gap-2 p-2">
                    <GameController size={28} weight='bold' />
                </Dialog.Trigger>
                {
                    adSelectedId && <UserDiscordModal discordId={adSelectedId} />
                }
            </Dialog.Root>
        </li>
    )
}