import { useNavigate } from "react-router-dom"

interface GameCardProps {
    id: string,
    bannerUrl: string,
    name: string,
    adsCount: number,
}

export function GameCard({ id, adsCount, bannerUrl, name }: GameCardProps) {
    const navigate = useNavigate()

    function handleRedirectToGame() {
        navigate(`games/${id}/ads`, {
            state: {
                title: name,
                bannerUrl: bannerUrl,
                adsCount: adsCount
            }
        })
    }

    return (
        <button onClick={handleRedirectToGame} disabled={adsCount === 0}
            className='relative rounded-lg overflow-hidden w-[100%] h-[100%] disabled:opacity-50 disabled:cursor-not-allowed'>

            <img src={bannerUrl} alt={name} title={name} className='w-[100%] h-[100%] rounded-lg'/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 flex flex-col items-start'>
                <strong className='font-bold text-white block text-left'>{name}</strong>
                <span className='text-zinc-300 text-sm block'>{adsCount} anúncio(s)</span>
            </div>
        </button>
    )
}