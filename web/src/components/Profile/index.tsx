import { CaretDown } from "phosphor-react";
import { useUser } from "../../hooks/useUser";

export function Profile() {
    const { userDiscord } = useUser()

    return (
        <div
            className="self-end flex gap-2 p-2 items-center cursor-pointer mb-8 hover:bg-[#1d1a2496] rounded"
            title="Perfil">

            <div className="flex flex-col items-end">
                <span className="text-white font-semibold text-sm">
                    {userDiscord.username}
                </span>

                <span className="text-zinc-500 text-xs">
                    #{userDiscord.discriminator}
                </span>
            </div>

            <img className="w-10 h-10 rounded" src={`https://cdn.discordapp.com/avatars/${userDiscord.id}/${userDiscord.avatar}`} 
            />

            <CaretDown size={16} color='#FFF' weight="bold" />
        </div>
    )
}