interface GameCardProps {
    bannerUrl: string,
    name: string,
    adsCount: number
}

export function GameCard({ adsCount, bannerUrl, name }: GameCardProps) {
    return (
        <a className='relative rounded-lg overflow-hidden' href="">
            <img src={bannerUrl} alt={name} title={name} />

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                <strong className='font-bold text-white block'>{name}</strong>
                <span className='text-zinc-300 text-sm block'>{adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}