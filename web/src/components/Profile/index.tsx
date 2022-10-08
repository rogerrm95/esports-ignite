import { CaretDown, DiscordLogo, Door, SignOut } from "phosphor-react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useNavigate } from 'react-router-dom'
import { useUser } from "../../hooks/useUser";

export function Profile() {
    const { userDiscord, signOut } = useUser()
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate('/')
    }

    return (
        <DropdownMenu.Root>
            {/* PERFIL */}
            <DropdownMenu.Trigger className="flex gap-2 p-2 items-center cursor-pointer hover:bg-[#1d1a2496] rounded"
                title="Perfil">

                <div className="flex flex-col items-end" aria-label="Perfil">
                    <span className="text-white font-semibold text-sm">
                        {userDiscord.username}
                    </span>

                    <span className="text-zinc-500 text-xs">
                        #{userDiscord.discriminator}
                    </span>
                </div>

                <img className="w-10 h-10 rounded" src={`https://cdn.discordapp.com/avatars/${userDiscord.id}/${userDiscord.avatar}`} />

                <CaretDown size={16} color='#FFF' weight="bold" />

            </DropdownMenu.Trigger>

            {/* MENU DROPDOWN */}
            <DropdownMenu.Portal >
                <DropdownMenu.Content className="w-40 bg-[#2a2634] flex flex-col p-2 rounded gap-2 shadow-xl" >

                    <DropdownMenu.Item className="text-zinc-100 text-xs cursor-pointer pr-2 py-2 pl-4 hover:bg-zinc-700 hover:rounded hover:outline-none">
                        <a href="https://discord.com/" className="flex items-center justify-between">
                            Discord <DiscordLogo size={16} weight='bold' />
                        </a>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className=" text-red-400 text-xs flex items-center justify-between cursor-pointer pr-2 py-2 pl-4 hover:bg-zinc-700 hover:rounded hover:outline-none">
                        <button className="flex items-center justify-between w-[100%]" onClick={handleSignOut}>
                            Sair <SignOut size={16} weight='bold' />
                        </button>
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow fill="dimgray" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}